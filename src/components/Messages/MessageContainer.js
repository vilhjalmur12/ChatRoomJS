import React from 'react';
import MessageRecieved from './MessageRecieved';
import MessageSent from './MessageSent';

class MessageContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='messages hidden'>
                <ul>
                    <MessageRecieved />
                    <MessageSent />
                </ul>
            </div>
        );
    }
}

export default MessageContainer;
