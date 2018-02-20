import React from 'react';

class FeedItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li>
                <div className="commenterImage">
                    <img src="img/avatars/9.png"></img>
                </div>
                <div className="commentText">
                    <p className="">Hello is a test comment.</p> <span className="date sub-text">on March 5, 2014</span>
                </div>
            </li>
        );
    }
}

export default FeedItem;
