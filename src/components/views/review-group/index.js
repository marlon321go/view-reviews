import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import reviewGroup from './reviewGroup.css';
import moment from 'moment';
import { WEEK, MONTH } from '../../../reducers';
import Review from '../single-review';

class ReviewGroup extends Component {

    groupByText() {
        if (this.props.groupBy === WEEK) {
            return moment(this.props.key).format('DD.MM') +
                moment(this.props.key).add(6, 'days').format(' - DD.MM');
        } else if (this.props.groupBy === MONTH) {
            return moment(this.props.key).format('MMMM YYYY')
        } else {
            return moment(this.props.key).format('ddd, DD.MM.YYYY')
        }
    }

    render() {
        return (
            <div>
                <div className='header'>
                    {this.groupByText()}
                </div>
                <div className='reviews'>
                    {
                        this.props.reviews.map((review) => {
                            return <Review
                                key={review.reviewId}
                                data={review}
                            />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default CSSModules(ReviewGroup, reviewGroup);