import React from 'react';

class MainTextInput extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="input-group mb-3 main-text-container">
                <input type="text" className="form-control" placeholder="Write Message" aria-label="Write Message" aria-describedby="basic-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Send</button>
                </div>
            </div>
        );
    }
}

export default MainTextInput;
