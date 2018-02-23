import React from 'react';
import RightNav from '../Navbars/RightNav';
import MessageBoard from '../MessageBoard/MessageBoard';
import MainTextInput from '../MainTextInput/MainTextInput';

class RightContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    sendMessage(message) {
        this.props.sendMessageFurther(message);
    }

    createRoom(room) {
        this.props.createRoom(room);
    }

    joinRoom(e) {
        this.props.joinRoom(e);
    }

    viewRooms(e) {
        this.props.viewRooms(e);

    }

    render() {
        var mainInput = null;
        if(this.props.viewing == 'feeds' || this.props.viewing == 'messages') {
            mainInput = <MainTextInput
                            sendMessageFurther={ message => this.sendMessage(message) }
                        />
        }

        return (
            <div className="col-lg-9 right-col">
                <RightNav
                    createRoom={ r => this.createRoom(r) }
                    viewRooms={ e => this.viewRooms(e) }
                />
                <MessageBoard
                    feeds={this.props.feeds}
                    viewing={this.props.viewing}
                    rooms={this.props.rooms}
                    allRooms={this.props.allRooms}
                    activeRoom={this.props.activeRoom}
                    joinRoom={ e => this.joinRoom(e)}
                />
                { mainInput }

            </div>
        );
    }
}

export default RightContainer;
