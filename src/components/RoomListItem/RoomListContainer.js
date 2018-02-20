import React from 'react';
import RoomListItem from './RoomListItem';

class RoomListContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="list-group room-list">
                    <RoomListItem />
                </div>
            </div>
        );
    }
}

export default RoomListContainer;
