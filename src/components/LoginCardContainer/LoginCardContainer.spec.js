import React from 'react';
import { shallow } from 'enzyme';
import LoginCardContainer from './LoginCardContainer';

describe('Test if correct container for main login card', () => {
    let comp = shallow(<LoginCardContainer />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(<div className="login-card card card-container"></div>)).toBe(true);
    });
});
