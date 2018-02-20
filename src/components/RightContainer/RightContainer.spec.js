import React from 'react';
import { shallow } from 'enzyme';
import RightContainer from './RightContainer';

describe('Check for the main Home container', () => {
    let comp = shallow(<RightContainer />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <div className="col-lg-9 right-col">

            </div>
        )
    ).toBe(true);
    });
});
