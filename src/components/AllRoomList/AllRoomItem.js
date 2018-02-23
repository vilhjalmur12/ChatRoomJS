import React from 'react';

class AllRoomItem extends React.Component {
    constructor(props) {
        super(props);
    }

    joinRoom (e) {
        this.props.joinRoom(this.props.name);
    }

    render() {
        return (
            <div className="col-lg-3 all-room-item">
                <h3 className="all-room-item-header">{this.props.name}</h3>
                <p className="all-room-item-content">{this.props.description}</p>
                <button onClick={ e => this.joinRoom(e) }>Join</button>
            </div>
        );
    }
}

export default AllRoomItem;
