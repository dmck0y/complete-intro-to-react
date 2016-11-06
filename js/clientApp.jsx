const React = require('react');
const Layout = require('./Layout');
const Landing = require('./Landing');
const Search = require('./Search');
const Details = require('./Details');
const { Router, Route, IndexRoute, browserHistory } = require('react-router');
const { store } = require('./Store');
const { Provider } = require('react-redux');

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={Details} />
          </Route>
        </Router>
      </Provider>
    );
  }
});

module.exports = App;
