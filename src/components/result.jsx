import React, { Component } from "react";
import axios from "axios";

class Result extends Component {
  state = {
    api: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:9000/search/clubs?category=Business`)
      .then((res) => {
        this.setState({ api: res.data });
      });
  }

  render() {
    const results = this.state.api.map((result) => {
      return (
        <div className="container my-result">
          <div className="d-flex text-primary">
            <div className="align-self-center">
              <img src={require("./btn.png")} alt="club name" />
            </div>
            <div className="p-4">
              <h2>{result["Organization Name"]}</h2>
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
    });
    return <div>{results}</div>;
  }
}

export default Result;
