import React from 'react';

class MessageRecieved extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li className="sent">
                <img src="img/avatars/7.png" alt="" ></img>
                <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I</p>
                <span className="date sub-text">on March 5, 2014</span>
            </li>
        );
    }
}

export default MessageRecieved;
