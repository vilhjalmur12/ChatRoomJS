import React from 'react';
import RightNav from '../Navbars/RightNav';
import MessageBoard from '../MessageBoard/MessageBoard';
import MainTextInput from '../MainTextInput/MainTextInput';

class RightContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="col-lg-9 right-col">
                <RightNav />
                <MessageBoard />
                <MainTextInput />
            </div>

        );
    }
}

export default RightContainer;
