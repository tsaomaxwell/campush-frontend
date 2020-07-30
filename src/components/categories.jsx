import React, { Component } from "react";
import { ReactSVG } from "react-svg";

class Categories extends Component {
  state = {};
  render() {
    let categories = ["Academic", "Business", "Greek", "Yeets"];
    return (
      <div className="container">
        <ReactSVG src={require("./academic-cat.svg")} />
        {/* <img src={require("./academic-cat.svg")} alt="" /> */}
        <h1>yeet</h1>
      </div>
    );
  }
}

export default Categories;
