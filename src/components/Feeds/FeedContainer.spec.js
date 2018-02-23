import React from 'react';
import { shallow } from 'enzyme';
import FeedContainer from './FeedContainer';
import FeedItem from './FeedItem';

var time = new Date();
const feed = {
    general: {
        user: {
            username: 'me',
            avatar: './resources/img/avatars/1.png'
        },
        message: 'my message',
        timestamp: time
    }
}

describe('Check for the feed container', () => {
    let component;
    beforeEach(() => {
        component = shallow(<FeedContainer
                                feeds={feed}
                            />);
    });

    it('should render correct prop user to child', () => {
        const child = component.find(FeedItem);
        expect(child.props().user).toEqual({ username: 'me', avatar: './resources/img/avatars/1.png' });
    });

    it('should render correct prop message to child', () => {
        const child = component.find(FeedItem);
        expect(child.props().message).toEqual('my message');
    });

    it('should render correct prop timestamp to child', () => {
        const child = component.find(FeedItem);
        expect(child.props().timestamp).toEqual(time);
    });
});
