import React from 'react';

class RoomListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoverHide: 'hidden'
        };
    }

    clickOpenRoom(e) {
        this.props.clickOpenRoom(this.props.room['name']);
    }

    deleteRoom(e) {
        this.props.deleteRoom(this.props.room['name']);
    }

    render() {
        return (
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="list-group room-list">
                    <a onClick={ e => this.clickOpenRoom(e) } onMouseLeave={ e => this.setState({ hoverHide: 'hidden'}) } onMouseEnter={ e => this.setState({ hoverHide: ''}) } href="#" className="list-group-item list-group-item-action flex-column align-items-start active my-room-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1 room-header">{this.props.room['name']}</h5>
                            <small><i id="my-room-notification-1" className="fas fa-bell hidden"></i></small>
                        </div>
                        <small className={'room-last-message ' + this.state.hoverHide}>Username</small>
                        <p className={'mb-1 room-last-message ' + this.state.hoverHide}>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small>3 days ago</small>
                        <small className={'text-muted room-option ' + this.state.hoverHide}>
                            <div className="btn-group dropleft">
                                <button type="button" className="room-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-h"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <li onClick={e => this.deleteRoom(e)} className="room-dropdown-action">Delete</li>
                                </div>
                            </div>
                        </small>
                    </a>
                </div>
            </div>
        );
    }
}

export default RoomListItem;
