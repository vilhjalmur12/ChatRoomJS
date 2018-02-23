import React from 'react';

class FeedItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October',
                    'November', 'December'];
        var month = months[this.props.timestamp.getMonth()];

        return (
            <li>
                <div className="commenterImage">

                </div>
                <div className="commentText">
                    <p className="">{this.props.user.username}</p>
                    <p className="message-small">{this.props.message}</p>
                    <span className="date sub-text">on {month} {this.props.timestamp.getDate()}, {this.props.timestamp.getFullYear()}, {this.props.timestamp.getHours()}:{this.props.timestamp.getMinutes()}</span>
                </div>
            </li>
        );
    }
}

export default FeedItem;
