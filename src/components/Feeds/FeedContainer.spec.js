import React from 'react';
import { shallow } from 'enzyme';
import FeedContainer from './FeedContainer';

describe('Check for the main Home container', () => {
    let comp = shallow(<FeedContainer />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <ul className="commentList">
                <FeedItem />
            </ul>
        )
    ).toBe(true);
    });
});
