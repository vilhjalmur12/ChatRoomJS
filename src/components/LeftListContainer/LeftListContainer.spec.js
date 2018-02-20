import React from 'react';
import { shallow } from 'enzyme';
import LeftListContainer from './LeftListContainer';

describe('Check for the main Home container', () => {
    let comp = shallow(<LeftListContainer />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <div className="container left-item-container pre-scrollable">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                    </div>
                </div>
            </div>
        )
    ).toBe(true);
    });
});
