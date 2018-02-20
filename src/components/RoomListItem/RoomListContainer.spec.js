import React from 'react';
import { shallow } from 'enzyme';
import RoomListContainer from './RoomListContainer';

describe('Check for the main Home container', () => {
    let comp = shallow(<RoomListContainer />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="list-group room-list">

                </div>
            </div>
        )
    ).toBe(true);
    });
});
