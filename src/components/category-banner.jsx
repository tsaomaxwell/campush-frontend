import React, { Component } from "react";
import { ReactComponent as BannerSVG } from "./svg-icons/business.svg";

class Banner extends Component {
  state = {
    header: "business",
  };
  render() {
    return (
      <div className="my-banner">
        <div className="container">
          <div className="row">
            <BannerSVG className="my-banner-image" />
            <div className="d-flex align-items-center col-xl-6">
              <div>
                <h1>{this.state.header}</h1>
                <p>
                  Finding the perfect club, organization, research position,
                  job, and community can be hard. So let us do the work for
                  you...
                </p>
                <button className="btn btn-secondary">
                  browse {this.state.header} clubs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
