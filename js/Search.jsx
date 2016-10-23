const React = require('react');
const ShowCard = require('./ShowCard');
const data = require('../public/data');

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    };
  },
  handleSearchTerm (e) {
    this.setState({searchTerm: e.target.value});
  },
  render () {
    return (
      <div className="container">
        <header className="header">
          <h1 className="brand">svideo</h1>
          <input value={this.state.searchTerm} className="search-input"
            type="text" placeholder="Search" onChange={this.handleSearchTerm} />
        </header>
        <div className="shows">
          {data.shows.reduce((acc, show) => {
            if (`${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0) {
              acc.push(<ShowCard {...show} key={show.imdbID} />);
            }
            return acc;
          }, [])}
        </div>
      </div>
    );
  }
});

module.exports = Search;
