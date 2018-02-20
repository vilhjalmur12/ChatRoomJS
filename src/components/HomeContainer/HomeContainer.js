import React from 'react';
import LeftContainer from '../LeftContainer/LeftContainer';
import RightContainer from '../RightContainer/RightContainer';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container-fluid main-container">
                <div className="row main-row">
                    <LeftContainer />
                    <RightContainer />
                </div>
            </div>
        );
    }
}

export default HomeContainer;
