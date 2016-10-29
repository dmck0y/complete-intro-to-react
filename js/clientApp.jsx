const React = require('react');
const Layout = require('./Layout');
const ReactDOM = require('react-dom');
const Landing = require('./Landing');
const Search = require('./Search');
const Details = require('./Details');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');

const App = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Landing} />
        <Route path='/search' component={Search} />
        <Route path='/details/:id' component={Details} />
      </Route>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
