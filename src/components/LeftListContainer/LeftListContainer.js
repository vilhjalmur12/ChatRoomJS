import React from 'react';
import RoomListContainer from '../RoomListItem/RoomListContainer';
import PrivateMessageListContainer from '../PrivateMessageList/PrivateMessageListContainer';


class LeftListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myRooms: this.props.myRooms
        }
    }

    clickOpen(obj) {
        this.props.clickOpen(obj);
    }

    deleteRoom(room) {
        this.props.deleteRoom(room);
    }

    render() {
        var rooms = this.props.myRooms;
        return (
            <div className="container left-item-container pre-scrollable">
                <div className="tab-content" id="pills-tabContent">
                    <RoomListContainer
                        myRooms={ rooms }
                        clickOpenRoom={ r => this.clickOpen(r)}
                        deleteRoom={ r => this.deleteRoom(r) }
                    />
                    <PrivateMessageListContainer />
                </div>
            </div>
        );
    }
}

export default LeftListContainer;
