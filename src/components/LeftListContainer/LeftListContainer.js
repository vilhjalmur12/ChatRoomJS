import React from 'react';
import RoomListContainer from '../RoomListItem/RoomListContainer';
import PrivateMessageListContainer from '../PrivateMessageList/PrivateMessageListContainer';


class LeftListContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container left-item-container pre-scrollable">
                <div className="tab-content" id="pills-tabContent">
                    <RoomListContainer />
                    <PrivateMessageListContainer />
                </div>
            </div>
        );
    }
}

export default LeftListContainer;
