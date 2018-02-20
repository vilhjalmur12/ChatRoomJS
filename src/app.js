import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/site';
import LoginContainer from './components/LoginContainer/LoginContainer';
import HomeContainer from './components/HomeContainer/HomeContainer';

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
                <HomeContainer />

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
