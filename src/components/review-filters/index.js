import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { updateSearchText, updateGroupBy, updateOrderBy, updateStarRatings } from '../../actions'
import Search from '../views/review-search'
import CustomDropdown from '../views/review-dropdowns'
import StarRatings from '../views/review-starRatings'
import store from '../../store';
import filters from './filters.css';

class ReviewFilters extends Component {
  constructor() {
    super();
    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateGroupBy = this.updateGroupBy.bind(this);
    this.updateOrderBy = this.updateOrderBy.bind(this);
    this.updateStarRatings = this.updateStarRatings.bind(this);
  }

  updateSearchText(text) {
    store.dispatch(updateSearchText(text));
  }

  updateGroupBy(group) {
    store.dispatch(updateGroupBy(group));
  }

  updateOrderBy(group) {
    store.dispatch(updateOrderBy(group));
  }

  updateStarRatings(starRatings){
    store.dispatch(updateStarRatings(starRatings));
  }

  render() {
    return (
      <div className = 'filters'>
        <Search
          value={this.props.searchText}
          onChange={this.updateSearchText}
        />
        <div>
          <CustomDropdown
            selected={this.props.groupBy}
            options={this.props.groupByOptions}
            placeholder="Group by"
            onChange={this.updateGroupBy}
          />
          <CustomDropdown
            selected={this.props.orderBy}
            options={this.props.orderByOptions}
            placeholder="Order by"
            onChange={this.updateOrderBy}
          />
        </div>
        <StarRatings
            stars={this.props.starRatings}
            onChange={this.updateStarRatings}
          />
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
    groupByOptions: state.groupByOptions,
    orderByOptions: state.orderByOptions,
  }
}

export default connect(mapStateToProps)(CSSModules(ReviewFilters, filters));