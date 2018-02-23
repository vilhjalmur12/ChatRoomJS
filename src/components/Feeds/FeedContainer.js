import React from 'react';
import FeedItem from './FeedItem';

class FeedContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        var listItems = [];
        var messages = this.props.feeds;
        for (var key in messages) {
            listItems.push(
                <FeedItem
                    key={key}
                    user={messages[key]['user']}
                    message={messages[key]['message']}
                    timestamp={new Date(messages[key]['timestamp'])}
                />
            );
        }
        return (
            <ul className="commentList">
                {listItems}

            </ul>
        );
    }
}

export default FeedContainer;
