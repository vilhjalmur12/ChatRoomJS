import React from 'react';
import { shallow } from 'enzyme';
import AllRoomList from './AllRoomList';
import AllRoomItem from './AllRoomItem';

// testing only with a single room item
const joinRoomMock = jest.fn();
const data = {
    general: {
        name: 'general',
        description: 'description of general',
    }
}

describe('Test if correct container for avatar selection', () => {
    let component;
    beforeEach(() => {
        component = shallow(<AllRoomList
                                rooms={data}
                                joinRoom={joinRoomMock}
                            />);
    });

    it('should have a single div container', () => {
        expect(component.find('div').first().hasClass('row all-room-list')).toBe(true);
    });

    it('should render correct prop name to child', () => {
        const child = component.find(AllRoomItem);
        expect(child.props().name).toBe('general');
    });

    it('should render correct prop description to child', () => {
        const child = component.find(AllRoomItem);
        expect(child.props().description).toBe('description of general');
    });
});
