import React from 'react';
import { shallow } from 'enzyme';
import LoginContainer from './LoginContainer';

describe('Test login_container', () => {
    let comp;
    beforeEach(() => {
        comp = shallow(<LoginContainer />);
    });

    it('should contain a div with container class', () => {

        expect(comp.contains(<div className="container"></div>)).toBe(true);
    });
});
