import React from 'react';
import { shallow } from 'enzyme';
import LeftContainer from './LeftContainer';

describe('Check for the main Home container', () => {
    let comp = shallow(<LeftContainer />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <div className="container-fluid main-container">
                <div className="row main-row">
                    <LeftNav />
                    <LeftListContainer />
                </div>
            </div>
        )
    ).toBe(true);
    });
});
