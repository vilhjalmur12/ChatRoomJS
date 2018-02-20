import React from 'react';
import { shallow } from 'enzyme';
import RoomListItem from './RoomListItem';

describe('Check for the main Home container', () => {
    let comp = shallow(<RoomListItem />);

    it('should contain a div with login card container classes', () => {
        expect(comp.contains(
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active my-room-item">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 room-header">Room Name</h5>
                    <small><i id="my-room-notification-1" className="fas fa-bell hidden"></i></small>
                </div>
                <small className="room-last-message hidden">Username</small>
                <p className="mb-1 room-last-message hidden">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small>3 days ago</small>
                <small className="text-muted room-option hidden">
                    <div className="btn-group dropleft">
                        <button type="button" className="room-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-h"></i>
                        </button>
                        <div className="dropdown-menu">
                            <li className="room-dropdown-action">Delete</li>
                            <hr className="divider"></hr>
                            <li className="room-dropdown-action">Delete</li>
                        </div>
                    </div>
                </small>
            </a>
        )
    ).toBe(true);
    });
});
