import React from 'react';

class RightNav extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <nav className="navbar navbar-light right-nav-container">
                <a className="navbar-brand" href="#">
                    <img src="img/logo-loading.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
                    ChatRoomJS
                </a>

                <ul className="nav navbar-nav navbar-right">
                    <li className="vdivide">
                        <a onclick="friend_notify(2)" href="#about">View Rooms</a>
                        <a href="#about" data-toggle="modal" data-target="#exampleModalCenter">Create Room</a>
                        <a className="logout-button" href="#about">Logout</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default RightNav;
