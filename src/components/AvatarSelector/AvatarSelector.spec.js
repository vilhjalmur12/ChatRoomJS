import React from 'react';
import { shallow } from 'enzyme';
import LoginCard from './AvatarSelector';

describe('Test if correct container for avatar selection', () => {
    let comp = shallow(<AvatarSelector />);

    it('should contain a container with 8 images', () => {
        expect(comp.contains(
            <div class="right-login-card">
                <label>Choose Cover Image</label>
                <div class="flex-container-login">
                    <div class="avatar-selection" data-avatar="4.png"><img src="img/avatars/4.png"></img></div>
                    <div onClick={event => this.onAvatarClick(event.target.dataset.holder)}><img data-holder='4' src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                    <div><img src="img/avatars/4.png"></img></div>
                </div>
            </div>
        )
    ).toBe(true);
    });
});
