import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './HomeContainer';

describe('Check for the main Home container', () => {
    let comp = shallow(<HomeContainer />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <div className="container-fluid main-container">
                <div className="row main-row">

                </div>
            </div>
        )
    ).toBe(true);
    });
});
