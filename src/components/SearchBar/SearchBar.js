import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="input-group mb-3 left-search">
                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button"><i className="fas fa-search"></i></button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
