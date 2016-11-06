const redux = require('redux');
const reactRedux = require('react-redux');
const { shows } = require('../public/data');

const SET_SEARCH_TERM = 'setSearchTerm';
const setInitialState = {
  searchTerm: '',
  shows
};

const rootReducer = (state = setInitialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      const newState = {};
      Object.assign(newState, state, {searchTerm: action.value});
      return newState;
    default:
      return state;
  }
};

const store = redux.createStore(rootReducer, setInitialState, redux.compose(
  typeof global === 'object' && typeof global.devToolsExtension !== 'undefined'
  ? global.devToolsExtension() : (f) => f
));

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    shows: state.shows
  };
};

const maptDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm});
    }
  };
};

const connector = reactRedux.connect(mapStateToProps, maptDispatchToProps);

module.exports = {connector, store};
