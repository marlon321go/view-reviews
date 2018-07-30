import { UPDATE_SEARCH_TEXT, UPDATE_GROUP_BY, UPDATE_ORDER_BY, UPDATE_STAR_RATINGS } from '../actions'

//------data config-----
//would have a separate config module for larger applications
export const DAY = 'Day'
export const WEEK = 'Week'
export const MONTH = 'Month'

export const DESC = 'Newest first'
export const ASC = 'Oldest first'

export const initialState = {
  orderBy: DESC,
  groupBy: DAY,
  searchText: '',
  starRatings: Array(5).fill(true),
  //these will not need upating for now.
  groupByOptions: [DAY, WEEK, MONTH],
  orderByOptions: [DESC, ASC]
}
//--------

export const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues);
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT: return updateObject(state, { searchText: action.searchText });
    case UPDATE_GROUP_BY: return updateObject(state, { groupBy: action.groupBy });
    case UPDATE_ORDER_BY: return updateObject(state, { orderBy: action.orderBy });
    case UPDATE_STAR_RATINGS: return updateObject(state, { starRatings: action.starRatings });
    default: return state;
  }
}

export default reducer;