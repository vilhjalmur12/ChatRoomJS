import React from 'react';
import { shallow } from 'enzyme';
import MessageContainer from './MessageContainer';

describe('Check for the main Home container', () => {
    let comp = shallow(<MessageContainer />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <div className='messages'>
                <ul>
                    <MessageRecieved />
                    <MessageSent />
                </ul>
            </div>
        )
    ).toBe(true);
    });
});
