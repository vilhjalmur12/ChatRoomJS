import React from 'react';
import PrivateMessageListItem from './PrivateMessageListItem';

class PrivateMessageListContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="list-group room-list">
                    <PrivateMessageListItem />
                </div>
            </div>
        );
    }
}

export default PrivateMessageListContainer;
