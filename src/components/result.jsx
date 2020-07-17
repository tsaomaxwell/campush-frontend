import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div className="container my-result">
        <div className="d-flex text-primary">
          <div className="align-self-center">
            <img src={require("./btn.png")} alt="club name" />
          </div>
          <div className="p-4">
            <h2>Business Transfer Network</h2>
            <p>this is the description</p>
          </div>
          <div className="p-4">
            <h4>quick info</h4>
          </div>
          <div className="ml-auto align-self-end">
            <h4>business</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
