import React from 'react';
import { shallow } from 'enzyme';
import LoginCard from './LoginCard';

describe('Test if correct container for main login card', () => {
    let comp = shallow(<LoginCardContainer />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <div className="left-login-card">

                    <p id="profile-name" className="profile-name-card"></p>
                    <form className="form-signin">
                        <input onChange={e => this.onInputChange(e.target.value)} type="text" id="inputEmail" className="form-control" placeholder="Username" required autoFocus></input>
                        <span></span>
                        <button onClick={this.onLoginClick()} className="btn btn-lg btn-primary btn-block btn-signin">Log In</button>
                    </form>
                </div>
        )
    ).toBe(true);
    });
});
