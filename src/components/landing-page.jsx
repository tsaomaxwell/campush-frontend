import React, { Component } from "react";
import Header from "./header.jsx";
import LandingBanner from "./landingpage/landing-banner.jsx";
import Categories from "./categories";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <LandingBanner />
        <Categories />
      </div>
    );
  }
}

export default LandingPage;
