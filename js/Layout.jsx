const React = require('react');
const { element } = React.PropTypes;

const Layout = (props) => {
  return (
    <div className="app-container">
      {props.children}
    </div>
  );
};

Layout.propTypes = {
  children: element
};

module.exports = Layout;
