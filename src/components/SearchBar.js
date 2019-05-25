import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title : '',
        }
    }

    onInputChange(title) {
        this.setState({title});
        this.props.onSearchByTitle(title);
    }

    render() {
        return (
            <Input icon={{name: 'search', circular: true, link: true}}
                    value={this.state.name}
                    onChange={(e) => this.onInputChange(e.target.value)} />
        )
    }
}

export default SearchBar;