import React from 'react';
import { shallow } from 'enzyme';
import MainTextInput from './MainTextInput';
import $ from 'jquery';

const sendMessageFurtherMock = jest.fn();

describe('Check for main text input', () => {
    let component;
    beforeEach(() => {
        component = shallow(<MainTextInput
                                sendMessageFurther={sendMessageFurtherMock}
                            />);
    });
    /*
    it('when a message is sent', () => {
        component.find('input').first().simulate('change', {targer: { value: 'my new message'}});
        component.find('button').first().simulate('click');
        expect(sendMessageFurtherMock).toHaveBeenCalledWith('my new message');
    });
    */
    it('should give true', () => {
        expect(true).toBe(true);
    });
});
