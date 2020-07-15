import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="bg-secondary">
        <header className="container navbar">
          <h1 className="text-primary">campush</h1>
          <input
            type="text"
            placeholder="search"
            className="col-xl-6 form-control"
          />
          <button className="btn btn-primary text-white">log in</button>
        </header>
      </div>
    );
  }
}

export default Header;
