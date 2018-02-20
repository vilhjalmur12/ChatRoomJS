import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/site';
import LoginContainer from './components/LoginContainer/LoginContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem('username'),
            avatar: localStorage.getItem('avatar')
        };


    }

    setAvatar(user) {
        this.setState({ username: user });
    }

    clearSession() {
        localStorage.clear();
        
    }

    render() {
        // If username is not set
        if (this.state.username) {
            return (
                //<login_container />
                <button onClick={this.clearSession()} >{this.state.username}</button>


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
