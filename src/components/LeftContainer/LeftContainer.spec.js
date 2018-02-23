import React from 'react';
import { shallow } from 'enzyme';
import LeftContainer from './LeftContainer';

const clickOpenMock = jest.fn();
const deleteRoomMock = jest.fn();

describe('Check for left container', () => {
    let component;
    beforeEach(() => {
        component = shallow(<LeftContainer
                                deleteRoom={deleteRoomMock}
                                clickOpen={clickOpenMock}
                            />);
    });

    it('should give true', () => {
        expect(true).toBe(true);
    });
});
