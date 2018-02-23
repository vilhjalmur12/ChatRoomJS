import React from 'react';
import { shallow } from 'enzyme';
import AllRoomItem from './AllRoomItem';

describe('Tests for room items in selection window', () => {
    let component;
    const mockFn = jest.fn();
    beforeEach(() => {
        component = shallow(<AllRoomItem
                                joinRoom={mockFn}
                                name={ 'my room name' }
                                description={ 'room description' }
                            />);
    });

    it('name h3 container', () => {
        expect(component.find('h3').first().text()).toEqual('my room name');
    });

    it('description p tag container', () => {
        expect(component.find('p').first().text()).toEqual('room description');
    });

    it('description p tag container', () => {
        component.find('button').first().simulate('click');
        expect(mockFn).toHaveBeenCalledWith('my room name');
    });
});
