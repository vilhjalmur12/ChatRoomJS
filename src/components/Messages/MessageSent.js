import React from 'react';

class MessageSent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li className="replies">
                <img src="img/avatars/7.png" alt=""></img>
                <p>When youre backed against the wall, the god damn thing down.</p>
                <span className="date sub-text">on March 5, 2014</span>
            </li>
        );
    }
}

export default MessageSent;
