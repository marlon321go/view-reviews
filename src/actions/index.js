export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'
export const UPDATE_GROUP_BY = 'UPDATE_GROUP_BY'
export const UPDATE_ORDER_BY = 'UPDATE_ORDER_BY'
export const UPDATE_STAR_RATINGS = 'UPDATE_STAR_RATINGS'

export const updateSearchText = (searchText) => ({
    type: UPDATE_SEARCH_TEXT,
    searchText
})

export const updateOrderBy = (orderBy) => ({
    type: UPDATE_ORDER_BY,
    orderBy
})

export const updateGroupBy = (groupBy) => ({
    type: UPDATE_GROUP_BY,
    groupBy
})

export const updateStarRatings = (starRatings) => ({
    type: UPDATE_STAR_RATINGS,
    starRatings
})
