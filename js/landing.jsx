const React = require('react');
const { Link } = require('react-router');

const Landing = () => {
  return (
    <div className="app-container">
      <div className="home-info">
        <h1 className="title">svideo</h1>
        <input type="text" placeholder="Search" className="search" />
        <Link to='/search' className="browse-all">Browse All</Link>
      </div>
    </div>
  );
};

module.exports = Landing;
