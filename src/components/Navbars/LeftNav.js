import React from 'react';

class LeftNav extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <nav className="navbar navbar-light left-nav-container">
                <ul className="nav nav-pills mb-3 left-nav" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Rooms</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default LeftNav;
