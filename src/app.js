import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/site';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="ui middle aligned center aligned grid">
            <div class="column login-column">
                <h2 class="ui teal image header">
                    <img src="assets/images/logo.png" class="image"></img>
                    <div class="content">
                        Log-in to chat
                    </div>
                </h2>
                <form class="ui large form">
                    <div class="ui stacked segment">
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="email" placeholder="Username"></input>
                                <button type="button" class="btn btn-primary">Primary</button>
                            </div>
                        </div>
                        <div class="ui fluid large teal submit button">Login</div>
                    </div>
                    <div class="ui error message"></div>
                </form>
            </div>
        </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
