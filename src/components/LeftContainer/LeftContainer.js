import React from 'react';
import LeftNav from '../Navbars/LeftNav';
import LeftListContainer from '../LeftListContainer/LeftListContainer';
import SearchBar from '../SearchBar/SearchBar';

class LeftContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

                    <div className="col-lg-3 left-col">
                        <LeftNav />
                        <SearchBar />
                        <LeftListContainer />
                    </div>


        );
    }
}

export default LeftContainer;
