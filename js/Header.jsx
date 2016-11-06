const React = require('react');
const { Link } = require('react-router');
const { bool, string, func } = React.PropTypes;

const Header = React.createClass({
  propTypes: {
    searchTerm: string,
    handleSearchTermChange: func,
    showSearch: bool
  },

  handleSearchTermEvent (e) {
    this.props.handleSearchTermChange(e.target.value);
  },

  render () {
    let utilSpace;

    if (this.props.showSearch) {
      utilSpace = <input value={this.props.searchTerm} className="search-input"
        type="text" placeholder="Search" onChange={this.handleSearchTermEvent} />;
    } else {
      utilSpace = (
        <h2 className="header-back">
          <Link to="/search">back</Link>
        </h2>
      );
    }

    return (
      <header className="header">
        <h1 className="brand">
          <Link to="/" className="brand-link">svideo</Link>
        </h1>
        {utilSpace}
      </header>
    );
  }
});

module.exports = Header;
