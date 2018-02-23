import React from 'react';
//import logo from '../../../resources/img/logo_loading.png';

class LoginCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            avatar: this.props.avatarProfile
        };
    }

    onInputChange(term) {
        this.setState({ username: term });
    }

    onLoginClick() {
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('avatar', this.state.avatar);
    }

    render() {
        return (
            <div className="left-login-card">
                <p id="profile-name" className="profile-name-card"></p>
                <form className="form-signin">
                    <input onChange={e => this.onInputChange(e.target.value)} type="text" id="inputEmail" className="form-control" placeholder="Username" required autoFocus></input>
                    <span></span>
                    <button onClick={this.onLoginClick()} className="btn btn-lg btn-primary btn-block btn-signin">Log In</button>
                </form>
            </div>
        );
    }
}

export default LoginCard;
