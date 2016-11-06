const React = require('react');
const { Link, hashHistory } = require('react-router');
const { connector } = require('./Store');
const { func, string } = React.PropTypes;

const Landing = React.createClass({
  propTypes: {
    setSearchTerm: func,
    searchTerm: string
  },

  handleSearchTermEvent (e) {
    this.props.setSearchTerm(e.target.value);
  },

  gotoSearch (e) {
    e.preventDefault();
    hashHistory.push('search');
  },

  render () {
    return (
      <div className="home-info">
        <h1 className="title">svideo</h1>
        <form onSubmit={this.gotoSearch}>
          <input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} type="text" placeholder="Search" className="search" />
          <Link to='/search' className="browse-all">Browse All</Link>
        </form>
      </div>
    );
  }
});

module.exports = connector(Landing);
