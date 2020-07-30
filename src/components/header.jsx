import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./search.jsx";

class Header extends Component {
  render() {
    return (
      <div className="bg-secondary">
        <header className="container navbar">
          <h1 className="text-primary">
            <Link to="/" className="text-link">
              campush
            </Link>
          </h1>
          <Search />
          <button className="btn btn-primary text-white">log in</button>
        </header>
      </div>
    );
  }
}

export default Header;
