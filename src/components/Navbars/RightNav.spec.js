import React from 'react';
import { shallow } from 'enzyme';
import RightNav from './RightNav';

describe('Check for the main Home container', () => {
    let comp = shallow(<RightNav />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <nav className="navbar navbar-light right-nav-container">
                <a className="navbar-brand" href="#">
                    <img src="img/logo-loading.png" width="30" height="30" className="d-inline-block align-top" alt="">
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
        )
    ).toBe(true);
    });
});
