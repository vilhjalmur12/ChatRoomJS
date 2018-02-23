import React from 'react';
import { shallow } from 'enzyme';
import FeedItem from './FeedItem';

var time = new Date();

describe('Check the feed item', () => {
    let component;
    beforeEach(() => {
        component = shallow(<FeedItem
                                user={ {username: 'me', avatar: './resources/img/avatars/1.png'} }
                                message={ 'my message' }
                                timestamp={ time }
                            />);
    });

    it('should render the username in a p tag', () => {
        expect(component.find('p').first().text()).toEqual('me');
    });

    it('should render the message in a p tag below username', () => {
        expect(component.find('.message-small').first().text()).toEqual('my message');
    });

    it('the time container should have correct time', () => {
        var months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October',
                    'November', 'December'];
        var month = months[time.getMonth()];

        var value = 'on ' + month + ' ' + time.getDate() + ', ' +
                    time.getFullYear() + ', ' + time.getHours() +
                    ':' + time.getMinutes();

        expect(component.find('span').first().text()).toEqual(value);
    });
});
