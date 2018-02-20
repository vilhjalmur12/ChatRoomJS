import React from 'react';
import { shallow } from 'enzyme';
import MessageRecieved from './MessageRecieved';

describe('Check for the main Home container', () => {
    let comp = shallow(<MessageRecieved />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <li className="sent">
                <img src="img/avatars/7.png" alt="" /></img>
                <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
                <span className="date sub-text">on March 5, 2014</span>
            </li>
        )
    ).toBe(true);
    });
});
