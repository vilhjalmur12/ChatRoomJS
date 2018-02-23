import React from 'react';
import $ from 'jquery';

class MainTextInput extends React.Component {
    constructor(props) {
        super(props);

    }

    sendMessage(e) {
            var sending = $('#main-text').val();
            this.props.sendMessageFurther(sending);
    }

    render() {
        return (
            <div className="input-group mb-3 main-text-container">
                <input id="main-text" type="text" className="form-control" placeholder="Write Message" aria-label="Write Message" aria-describedby="basic-addon2"></input>
                <div className="input-group-append">
                    <button onClick={e => this.sendMessage(e)} className="btn btn-outline-secondary" type="button">Send</button>
                </div>
            </div>
        );
    }
}

export default MainTextInput;
