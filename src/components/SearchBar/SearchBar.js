import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="input-group mb-3 left-search">
                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"></input>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
