import React from 'react';
import { shallow } from 'enzyme';
import MessageSent from './MessageSent';

describe('Check for the main Home container', () => {
    let comp = shallow(<MessageSent />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <li className="replies">
                <img src="img/avatars/7.png" alt=""></img>
                <p>When youre backed against the wall, break the god damn thing down.</p>
                <span className="date sub-text">on March 5, 2014</span>
            </li>
        )
    ).toBe(true);
    });
});
