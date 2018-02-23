import React from 'react';
import MessageContainer from '../Messages/MessageContainer';
import FeedContainer from '../Feeds/FeedContainer';
import AllRoomList from '../AllRoomList/AllRoomList';

class MessageBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hovering: false
        }
    }

    componentDidUpdate() {
        if(!(this.state.hovering)) {
            this.scrollToBottom();
        }
    }

    scrollToBottom() {
        var scrollBar = document.getElementById('right-main-container');
        scrollBar.scrollTop = scrollBar.scrollHeight;
    }

    joinRoom(e) {
        this.props.joinRoom(e);
    }

    render() {
        var roomName;
        for(var key in this.props.activeRoom) {
            roomName = key;
        }
        var view = null
        if (this.props.viewing == 'messages') {
            return (
                <div id="right-main-container" className="container right-main-container">
                    <MessageContainer />

                </div>
            );
        } else if (this.props.viewing == 'feeds') {
            var messages = null;
            var activeRoom = this.props.activeRoom;
            for (var key in activeRoom) {
                messages = activeRoom[key]['messages'];
            }
            return (
                <div onMouseEnter={e => this.setState({ hovering: true }) } onMouseLeave={ e => this.setState({ hovering: false })  } id="right-main-container" className="container right-main-container">
                    <FeedContainer
                        feeds={ this.props.activeRoom[roomName]['messages'] }
                    />

                </div>
            );
        } else {
            return(
                <div id="right-main-container" className="container right-main-container">
                    <AllRoomList
                        rooms={this.props.allRooms}
                        joinRoom={ e => this.joinRoom(e) }
                    />
                </div>
            );

        }

    }
}

export default MessageBoard;
