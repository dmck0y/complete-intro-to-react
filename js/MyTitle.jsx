var React = require('react');
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
  render () {
    const style = {color: this.props.color};
    return (
        <h1 style={ style }>{this.props.title}</h1>
    );
  }
});

module.exports = MyTitle;
