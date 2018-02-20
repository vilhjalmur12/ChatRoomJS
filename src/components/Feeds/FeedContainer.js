import React from 'react';
import FeedItem from './FeedItem';

class FeedContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ul className="commentList">
                <FeedItem />
            </ul>
        );
    }
}

export default FeedContainer;
