import React from 'react';
import { shallow } from 'enzyme';
import FeedItem from './FeedItem';

describe('Check for the main Home container', () => {
    let comp = shallow(<FeedItem />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <li>
                <div className="commenterImage">
                    <img src="img/avatars/9.png"></img>
                </div>
                <div className="commentText">
                    <p className="">Hello this is a test comment.</p> <span className="date sub-text">on March 5, 2014</span>
                </div>
            </li>
        )
    ).toBe(true);
    });
});
