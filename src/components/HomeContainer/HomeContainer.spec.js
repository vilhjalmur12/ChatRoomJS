import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './HomeContainer';

// Mock functions


describe('Check for the main Home container', () => {
    let component;
    beforeEach(() => {
        component = shallow(<HomeContainer />);
    });

    it('should give true', () => {
        expect(true).toBe(true);
    });
});
