const React = require('react');
const ShowCard = require('./ShowCard');
const Header = require('./Header');
const { object } = React.PropTypes;

const Search = React.createClass({
  propTypes: {
    shows: object,
    route: object
  },

  getInitialState () {
    return {
      searchTerm: ''
    };
  },

  handleSearchTermChange (searchTerm) {
    this.setState({searchTerm: searchTerm});
  },

  render () {
    return (
      <div className="container">
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />
        <div className="shows">
          {this.props.route.shows
            .reduce((acc, show) => {
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
