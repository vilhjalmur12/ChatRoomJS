import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/site';
import LoginContainer from './components/LoginContainer/LoginContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };

    }
    render() {
        var user = this.state.username;

        // If username is not set
        if (user) {
            return (
                //<login_container />
                <p>is</p>
            );
        } else {
            return (
                //<login_container />
                <LoginContainer />
            );
        }

    }
}


ReactDOM.render(<App />, document.getElementById('app'));
