const React = require('react');
const ShowCard = require('./ShowCard');
const Header = require('./Header');
const { connector } = require('./Store');
const { object, string, arrayOf } = React.PropTypes;

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(object),
    searchTerm: string
  },

  render () {
    return (
      <div className="container">
        <Header showSearch />
        <div className="shows">
          {this.props.shows
            .reduce((acc, show) => {
              if (`${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0) {
                acc.push(<ShowCard {...show} key={show.imdbID} />);
              }
              return acc;
            }, [])}
        </div>
      </div>
    );
  }
});

module.exports = connector(Search);
