import React from 'react';
import LeftNav from '../Navbars/LeftNav';
import LeftListContainer from '../LeftListContainer/LeftListContainer';
import SearchBar from '../SearchBar/SearchBar';

class LeftContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myRooms: this.props.myRooms
        };
    }

    clickOpen(obj) {
        this.props.clickOpen(obj);
    }

    deleteRoom(room) {
        this.props.deleteRoom(room);
    }

    render() {
        var rooms = this.props.myRooms;
        return (
            <div className="col-lg-3 left-col">
                <LeftNav />
                <SearchBar />
                <LeftListContainer
                    myRooms={ rooms }
                    clickOpen={ o => this.clickOpen(o)}
                    deleteRoom={ r => this.deleteRoom(r)}
                />
            </div>
        );
    }
}

export default LeftContainer;
