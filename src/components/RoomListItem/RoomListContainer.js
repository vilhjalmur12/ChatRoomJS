import React from 'react';
import RoomListItem from './RoomListItem';

class RoomListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    clickOpenRoom(room) {
        this.props.clickOpenRoom(room);
    }

    deleteRoom(room) {
        this.props.deleteRoom(room);
    }

    render() {
        var listItems = [];
        var rooms = this.props.myRooms;
        for (var key in rooms) {
            listItems.push(
                <RoomListItem
                    key={key}
                    room={rooms[key]}
                    clickOpenRoom={ r => this.clickOpenRoom(r) }
                    deleteRoom={ r => this.deleteRoom(r) }
                />
            );
        }

        return (
        <div>
            { listItems }
        </div>


        );
    }
}

export default RoomListContainer;
