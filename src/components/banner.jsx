import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="my-banner">
        <div className="container">
          <div className="d-inline col-xl-6">
            <h1>image</h1>
          </div>
          <div className="d-inline col-xl-6">
            <h1>Pushing students and campus opportunities closer together</h1>
            <p>
              Finding the perfect club, organization, research position, job,
              and community can be hard. So let us do the work for you...
            </p>
            <button>TAKE SURVEY</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
