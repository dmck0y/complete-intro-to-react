const React = require('react');
const { object } = React.PropTypes;

const Details = React.createClass({
  propTypes: {
    params: object.isRequired
  },

  render () {
    return (
      <div className="container">
        {console.log(this.props.params)}
      </div>
    );
  }
});

module.exports = Details;
