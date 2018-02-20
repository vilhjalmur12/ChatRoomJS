import React from 'react';
import { shallow } from 'enzyme';
import PrivateMessageListContainer from './PrivateMessageListContainer';

describe('Check for the main Home container', () => {
    let comp = shallow(<PrivateMessageListContainer />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="list-group room-list">

                </div>
            </div>
        )
    ).toBe(true);
    });
});
