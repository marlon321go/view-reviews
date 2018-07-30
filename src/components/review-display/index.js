import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rot13 } from './decrypt-rot13.js'
import _ from 'lodash';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ASC, WEEK, MONTH } from '../../reducers';
import ReviewGroup from './review-group';

const PROXY = 'https://cors-anywhere.herokuapp.com/';
//encryped using https://www.rot13.com/
const URL = 'uggcf://fryyvpf-sebagraq-grfg.urebxhncc.pbz/erivrjf/'

class DisplayReviews extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            data: [],
            hasMore: true,
        }
        this.fetchData = this.fetchData.bind(this);
        this.fetchData()
    }

    fetchData() {
        let url = PROXY + rot13(URL + this.state.page)
        let init = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        };
        fetch(url, init)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: this.state.data.concat(json.reviews),
                    hasMore: json.hasMore,
                    page: this.state.page + 1
                })
            });
    }

    filterStars(data) {
        return data.filter(r => this.props.starRatings[r.stars - 1]);
    }

    filterSearch(data) {
        if (data.length === 0) return data;
        if (this.props.searchText.length === 0) {
            return data;
        } else {
            return data.filter(r => {
                return r.title.toUpperCase().includes(this.props.searchText.toUpperCase())
                    || r.content.toUpperCase().includes(this.props.searchText.toUpperCase());
            });
        }
    }

    sortData(data) {
        let sortOrder = (this.props.orderBy === ASC ? "asc" : "desc")
        return _.orderBy(data, ['reviewCreated'], [sortOrder]);
    }

    groupData(data) {
        if (data.length === 0) return data;
        let groupBY;
        switch (this.props.groupBy) {
            case WEEK:
                groupBY = 'isoWeek'
                break;
            case MONTH:
                groupBY = 'month'
                break;
            default:
                groupBY = 'day'
        }
        return _.groupBy(data, (data) => moment(data.reviewCreated).startOf(groupBY));
    }

    filterReviews(data) {
        //filter stars
        data = this.filterStars(data)
        //filter search
        data = this.filterSearch(data)
        //sort reviews
        data = this.sortData(data)
        //group reviews
        data = this.groupData(data)
        return data

    }

    render() {
        let filteredReviews = this.filterReviews(this.state.data);
        const loading = <img src={require('./loading.gif')} />;
        return (
            <div>
                {this.state.data.length == 0 && loading}
                <InfiniteScroll
                    dataLength={this.state.data.length}
                    next={this.fetchData}
                    hasMore={this.state.hasMore}x
                    hasChildren={true}
                    loader={loading}
                    endMessage={
                        <p style={{ textAlign: 'center', color: '#67C5E6' }}>
                            <b>Yay! You have seen them all!</b>
                        </p>
                    }
                >
                    {
                        Object.keys(filteredReviews).map((key) => {
                            return <ReviewGroup
                                reviews={filteredReviews[key]}
                                reviewCreated={key}
                                groupBy={this.props.groupBy}
                            />
                        })
                    }
                </InfiniteScroll>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orderBy: state.orderBy,
        groupBy: state.groupBy,
        searchText: state.searchText,
        starRatings: state.starRatings,
    }
}

export default connect(mapStateToProps)(DisplayReviews);