import React from 'react';

class LoginCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="left-login-card">
                    <img id="profile-img" className="profile-img-card" src='/resources/img/logo-loading.png' />
                    <p id="profile-name" className="profile-name-card"></p>
                    <form className="form-signin" action="home.html">
                        <input type="text" id="inputEmail" className="form-control" placeholder="Username" required autoFocus></input>
                        <span></span>
                        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Log In</button>
                    </form>
                </div>
        );
    }
}

export default LoginCard;
