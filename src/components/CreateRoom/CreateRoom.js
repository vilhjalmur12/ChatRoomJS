import React from 'react';

class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomTitle: '',
            roomDescription: '',
            show: true
        }

    }

    createRoom(name, desc) {
        var roomSend = {};
        roomSend[name] = { name: name, description: desc};
        this.props.createRoom(roomSend);
    }

    updateTitle(term) {
        this.setState({ roomTitle: term });
    }

    updateDescription(term) {
        this.setState({ roomDescription: term });
    }

    render() {
        return (
            <div className="modal-button-container">
                <a href="#about" data-toggle="modal" data-target="#exampleModalCenter">Create Room</a>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Create New Room</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <input onChange={ e => this.updateTitle(e.target.value)} type="text" className="form-control" id="createRoomName" aria-describedby="emailHelp" placeholder="Room Name"></input>
                                        <input onChange={ e => this.updateDescription(e.target.value)} type="text" className="form-control" id="createRoomDescription" aria-describedby="emailHelp" placeholder="Description"></input>
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button onClick={ e => this.createRoom(this.state.roomTitle, this.state.roomDescription)} type="button" className="btn btn-primary" data-dismiss="modal">Create!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateRoom;
