import React from 'react';
import LoginCard from '../LoginCard/LoginCard';
import AvatarSelector from '../AvatarSelector/AvatarSelector';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        };
    }

    onUsernameLogin(user) {
        this.setState({ user });
    }

    render() {
        return (
            <div className="container">
                <div className="login-card card card-container">
                    <LoginCard avatarProfile={'./resorces/'}
                        onUserLogin={ user => this.onUsernameLogin(user)}
                    />
                </div>
            </div>
        );
    }
}

export default LoginContainer;
