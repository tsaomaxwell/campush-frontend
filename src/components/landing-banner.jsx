import React, { Component } from "react";
import { ReactComponent as LandingSVG } from "./landing-graphic.svg";

class LandingBanner extends Component {
  render() {
    return (
      <div className="my-landing-banner">
        <div className="container">
          <div className="row">
            <LandingSVG className="my-banner-image col-xl-6" />
            <div className="d-flex align-items-center col-xl-6">
              <div>
                <h1>
                  Pushing students and campus opportunities closer together
                </h1>
                <p>
                  Finding the perfect club, organization, research position,
                  job, and community can be hard. So let us do the work for
                  you...
                </p>
                <button className="btn btn-outline-primary">
                  <strong>TAKE SURVEY</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingBanner;
