import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import search from './search.css';

class Search extends Component {

    render() {
        return <input
            className='search'
            placeholder="Search..."
            value={this.props.value}
            onChange={(e) => this.props.onChange(e.target.value)}
        />
    }
}

export default CSSModules(Search, search);
