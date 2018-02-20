import React from 'react';
import LoginCard from '../LoginCard/LoginCard';
import AvatarSelector from '../AvatarSelector/AvatarSelector';

class LoginCardContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.onUserLogin);
        this.state = {
            avatarSelection: 'resources/img/avatars/1.png'
        };
    }

    onAvatarChange(term) {
            this.setState({ avatarSelection: term });
    }

    onUsernameLogin(user) {
            this.props.onUserLogin(user);
    }

    render() {
        return (
            <div className="login-card card card-container">
                <LoginCard avatarProfile={this.state.avatarSelection}
                    onUserLogin={ user => this.onUsernameLogin(user)}
                />
                <AvatarSelector
                    onAvatarSelect={ term => this.onAvatarChange(term)}
                />
            </div>
        );
    }
}

export default LoginCardContainer;
