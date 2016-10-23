const React = require('react');

const Landing = () => {
  return (
    <div className="app-container">
      <div className="home-info">
        <h1 className="title">svideo</h1>
        <input type="text" placeholder="Search" className="search" />
        <button className="browse-all">Or Browse All</button>
      </div>
    </div>
  );
};

module.exports = Landing;
