import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('Check for the main Home container', () => {
    let comp = shallow(<SearchBar />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <div class="input-group mb-3 left-search">
                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
                </div>
            </div>
        )
    ).toBe(true);
    });
});
