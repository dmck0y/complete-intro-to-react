const React = require('react');

const Debug = React.createClass({
  render () {
    return (
      <pre>
        <code>{JSON.stringify(this.props, null, 4)}</code>
      </pre>
    );
  }
});

module.exports = Debug;
