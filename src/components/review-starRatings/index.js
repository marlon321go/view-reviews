import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

import starStyle from './starStyle.css';

class StarRatings extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let stars = [...this.props.stars];
        stars[e.target.value] = !stars[e.target.value];
        this.props.onChange(stars);
    }

    render() {
        return <div className='stars-container'>
            <div className='title'>
                FILTER BY:
        </div>
            <div>
                {this.props.stars.map((option, index) => {
                    return <span key={index}>
                        <label className="star-container">
                            <input
                                value={index}
                                type='checkbox'
                                checked={option}
                                onChange={this.onChange}
                            />
                            <span className="checkmark"></span>
                            {index+1} <Glyphicon glyph="star" />
                        </label>
                    </span>
                })}
            </div>
        </div>
    }
}

export default CSSModules(StarRatings, starStyle);
