import React from 'react';
import AllRoomItem from './AllRoomItem';

class AllRoomList extends React.Component {
    constructor(props) {
        super(props);
    }

    joinRoom(e) {
        this.props.joinRoom(e);
    }

    render() {
        var listItems = [];
        var rooms = this.props.rooms;
        for (var key in rooms) {
            listItems.push(
                <AllRoomItem
                    key={key}
                    name={rooms[key]['name']}
                    description={rooms[key]['description']}
                    joinRoom={ e => this.joinRoom(e) }
                />
            );
        }
        return (
            <div className='row all-room-list'>
                {listItems}
            </div>
        );
    }
}

export default AllRoomList;
