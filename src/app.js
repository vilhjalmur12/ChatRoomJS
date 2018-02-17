import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/site';
//import login_container from './components/login_container/login_container';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'villi'
        };

    }
    render() {
        var user = this.state.username;

        if (user) {
            return (
                //<login_container />
                <p>is</p>
            );
        } else {
            return (
                //<login_container />
                <p>not</p>
            );
        }

    }
}


ReactDOM.render(<App />, document.getElementById('app'));
