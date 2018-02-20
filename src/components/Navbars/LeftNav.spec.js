import React from 'react';
import { shallow } from 'enzyme';
import LeftNav from './LeftNav';

describe('Check for the main Home container', () => {
    let comp = shallow(<LeftNav />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <nav className="navbar navbar-light left-nav-container">
                <ul className="nav nav-pills mb-3 left-nav" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Rooms</a>
                    </li>
                    <li className="nav-item">
                        <a clasName="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Messages</a>
                    </li>
                </ul>
            </nav>
        )
    ).toBe(true);
    });
});
