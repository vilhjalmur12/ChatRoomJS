import React from 'react';
import CreateRoom from '../CreateRoom/CreateRoom';

class RightNav extends React.Component {
    constructor(props) {
        super(props);
    }

    createRoom(room) {
        this.props.createRoom(room);
    }

    viewRooms(e) {
        this.props.viewRooms(e);
    }

    logout(e) {
        console.log('Pre');
        localStorage.setItem('username', '');
        localStorage.getItem('avatar', '');
        console.log('After');
        window.location.reload();  
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
                        <a onClick={ e => this.viewRooms(e) } href="#">View Rooms</a>
                        <CreateRoom createRoom={ room => this.createRoom(room) }/>
                        <a onClick={ e => this.logout(e) } className="logout-button" href="#">Logout</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default RightNav;
