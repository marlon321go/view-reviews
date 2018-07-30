import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import moment from 'moment';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import review from './review.css';

class Review extends Component {

    render() {
        return (
            <div className='container' key={this.props.data.reviewId}>
                <div className='heading'>
                    <div className='image' />
                    <div className='info-holder'>
                        <div className='info-title'>DATE</div>
                        <div className='info-text'>
                            {moment(this.props.data.reviewCreated).format('DD.MM.YYYY')}
                        </div>
                    </div>

                    <div className='info-holder'>
                        <div className='info-title'>STARS</div>
                        <div className='info-text'>
                            {Array(this.props.data.stars).fill(<Glyphicon glyph="star" />)}
                            {Array(5 - this.props.data.stars).fill(<span className="grey"><Glyphicon glyph="star" /></span>)}
                        </div>
                    </div>

                    <div className='info-holder'>
                        <div className='info-title'>{this.props.data.reviewId}</div>
                        <div className='info-text'>
                            {this.props.data.productTitle}
                        </div>
                    </div>
                </div>
                <div className='title'>{this.props.data.title}</div>
                <div>{this.props.data.content}</div>
            </div>
        );
    }
}

export default CSSModules(Review, review);
