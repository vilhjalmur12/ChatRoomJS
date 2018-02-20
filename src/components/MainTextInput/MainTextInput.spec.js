import React from 'react';
import { shallow } from 'enzyme';
import MainTextInput from './MainTextInput';

describe('Check for the main Home container', () => {
    let comp = shallow(<MainTextInput />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <div className="input-group mb-3 main-text-container">
            <input type="text" className="form-control" placeholder="Write Message" aria-label="Write Message" aria-describedby="basic-addon2">
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Send</button>
            </div>
        </div>
        )
    ).toBe(true);
    });
});
