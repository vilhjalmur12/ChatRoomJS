import React from 'react';
import LeftContainer from '../LeftContainer/LeftContainer';
import RightContainer from '../RightContainer/RightContainer';
import socketClient from 'socket.io-client';
import { PropTypes } from 'prop-types';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            socket: socketClient('http://localhost:3000'),
            user: { username: localStorage.getItem('username'), avatar: localStorage.getItem('avatar')},
            allRooms: {},
            myRooms: {},
            activeRoom: {},
            viewing: ''
        };

        this.getAllRooms();
    }

    componentDidMount() {
        const socket = this.state.socket;
        socket.on('msg', (msg) => {
            var roomMsg = msg['room'];
            delete msg['room'];
            let activeRoom = this.state.activeRoom;
            let roomName;
            for (var key in activeRoom) {
                roomName = key;
            }
            if (roomName == roomMsg) {
                for (var msgKey in msg) {
                    activeRoom[roomName]['messages'][msgKey] = msg[msgKey];
                }
            }
            let myRooms = Object.assign({}, this.state.myRooms);
            for (var msgKey in msg) {
                myRooms[roomMsg]['messages'][msgKey] = msg[msgKey];
            }

            this.setState({ activeRoom, myRooms });
        });

        socket.on('create_room', (room) => {
            let allRooms = Object.assign({}, this.state.allRooms);
            for(var key in room) {
                allRooms[key] = room[key];
            }
            this.setState({ allRooms });
        });

        socket.on('get_rooms', (allRooms) => {
            if (($.isEmptyObject(this.state.allRooms))) {
                this.setState({ allRooms });
            }
        });

        socket.on('change_room', (room) => {
            var activeRoom = { };
            var values = this.state.myRooms[room];
            activeRoom[room] = values;
            this.setState({ viewing: 'feeds', activeRoom });
        });

    }

    getAllRooms() {
        const socket = this.state.socket;
        socket.emit('get_rooms');
    }

    getContext() {
        return {
            socket: socketClient('http://localhost:3000')
        };
    }

    createRoom(room) {
        const socket = this.state.socket;
        let myRooms = Object.assign({}, this.state.myRooms);
        var timestamp = new Date().getTime();
        for(var key in room) {
            var welcomeMessage = 'Hi, and welcome to ' + key + ' the admin is ' + this.state.user.username;
            room[key]['messages'] = { welcome: { user: this.state.user, message: welcomeMessage, timestamp}};
            myRooms[key] = room[key];
        }
        this.setState({ myRooms });
        socket.emit('create_room', room);
    }

    sendMessage(message) {
        const socket = this.state.socket;
        if(this.state.activeRoom) {
            var roomName;
            for (var key in this.state.activeRoom) {
                roomName = key;
            }
            var sending = {};
            var stamp = new Date().getTime();
            sending[stamp] = { user: this.state.user, message: message, timestamp: stamp};
            sending['room'] = roomName;
            console.log(sending);
            socket.emit('msg', sending);
        }
    }

    clickOpen(obj) {
        console.log(obj);
        var activeRoom = { };
        var values = this.state.myRooms[obj];
        activeRoom[obj] = values;
        this.setState({ viewing: 'feeds', activeRoom });
        this.changeRoom(obj);
    }

    changeRoom(room) {
        const socket = this.state.socket;
        socket.emit('change_room', room);
    }

    joinRoom(room) {
        const socket = this.state.socket;
        socket.emit('change_room', room);
        var activeRoom = this.state.allRooms[room];
        let myRooms = Object.assign({}, this.state.myRooms);
        myRooms[room] = activeRoom;
        var newRoom = {};
        newRoom[room] = activeRoom;
        this.setState({ myRooms, activeRoom: newRoom, viewing: 'feeds' });
    }

    testClick(e) {
        console.log(this.state.viewing);
    }

    viewRooms(e) {
        this.setState({ viewing: '' });

    }

    deleteRoom(room) {
        let myRooms = Object.assign({}, this.state.myRooms);
        let activeRoom = Object.assign({}, this.state.activeRoom);
        delete activeRoom[room];
        delete myRooms[room];
        this.setState({ myRooms, viewing: '' , activeRoom });
        console.log(this.state.viewing);
        console.log(activeRoom);
    }


    render() {

        return (
            <div className="container-fluid main-container">
                <div className="row main-row">
                    <LeftContainer
                        myRooms={this.state.myRooms}
                        clickOpen={ o => this.clickOpen(o) }
                        deleteRoom={r => this.deleteRoom(r)}
                    />
                    <RightContainer
                        sendMessageFurther={ message => this.sendMessage(message) }
                        createRoom={ room => this.createRoom(room) }
                        viewing={this.state.viewing}
                        rooms={this.state.allRooms}
                        activeRoom={this.state.activeRoom}
                        allRooms={this.state.allRooms}
                        joinRoom={e => this.joinRoom(e)}
                        viewRooms={ e => this.viewRooms(e)}
                    />
                </div>
                <button onClick={e => this.testClick(e)}>Test</button>
            </div>
        );
    }
}

HomeContainer.ContextTypes = {
    socket: PropTypes.object.isRequired
};

export default HomeContainer;
