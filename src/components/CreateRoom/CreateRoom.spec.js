import React from 'react';
import { shallow } from 'enzyme';
import CreateRoom from './CreateRoom';

const createRoomMock = jest.fn();

describe('Test for Creating room', () => {
    let component;
    beforeEach(() => {
        component = shallow(<CreateRoom
                                createRoom={createRoomMock}
                            />);
    });

    it('should be a hidden modal from start', () => {
        expect(component.find('#exampleModalCenter').prop('aria-hidden')).toBe('true');
    });

    it('should give an updated description of roomTitle in state', () => {
        component.find('#createRoomName').first().simulate('change', { target: { value: 'new room'}});
        expect(component.state().roomTitle).toEqual('new room');
    });

    it('should give an updated description of roomDescription in state', () => {
        component.find('#createRoomDescription').first().simulate('change', { target: { value: 'new description'}});
        expect(component.state().roomDescription).toEqual('new description');
    });

    it('should call the props function for createRoom with the roomName and roomDescription in state', () => {
        component.find('#createRoomName').first().simulate('change', { target: { value: 'new room'}});
        component.find('#createRoomDescription').first().simulate('change', { target: { value: 'new description'}});
        // Primary button
        component.find('.btn-primary').first().simulate('click');

        expect(createRoomMock).toHaveBeenCalledWith({ 'new room': { description: 'new description', name: 'new room' }});
    });


});
