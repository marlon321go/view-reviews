import React, { Component } from 'react'
import { Provider } from 'react-redux';
import ReviewFilters from './components/review-filters'
import DisplayReviews from './components/review-display'
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ReviewFilters />
          <DisplayReviews />
        </div>
      </Provider>
    );
  }
}

export default App;
