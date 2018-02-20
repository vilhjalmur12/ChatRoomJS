import React from 'react';
import MessageContainer from '../Messages/MessageContainer';
import FeedContainer from '../Feeds/FeedContainer';

class MessageBoard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="right-main-container" className="container right-main-container">
                <MessageContainer />
                <FeedContainer />
            </div>
        );
    }
}

export default MessageBoard;
