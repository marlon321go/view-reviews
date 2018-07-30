import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import dropdown from './dropdown.css';

class CustomDropdown extends Component {

    render() {
        //could consider using react-select lib
        return <select
            className="dropdown"
            onChange={(e) => this.props.onChange(e.target.value)}>
            <option disabled selected>{this.props.placeholder}</option>
            {this.props.options.map((option, index) => {
                return <option key={index} value={option}>{option}</option>
            })}
        </select>
    }
}

export default CSSModules(CustomDropdown, dropdown);
