import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/maxwell-components/footer";
import { MDBCol, MDBRow } from "mdbreact";

class Club extends Component {
  state = {
    clubName: "myClub",
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          <div>
            <MDBCol>
              <MDBRow>
                <p>{this.state.clubName}</p>
                <p>Recent Activity</p>
              </MDBRow>
              <MDBRow>recentAnouncementComponent</MDBRow>
            </MDBCol>
            <MDBCol>bannerImageOrSlideshowOrVideo</MDBCol>
          </div>
          <div>
            <MDBCol>
              <button>Who Are We</button>
            </MDBCol>
            <MDBCol>
              <button>Leadership</button>
            </MDBCol>
            <MDBCol>
              <button>Events</button>
            </MDBCol>
            <MDBCol>
              <button>Applications</button>
            </MDBCol>
          </div>
          mainTextBox
          <div>
            <MDBRow>
              {/** replace references with dynamic reference to database link */}
              <a href="#!">mailIcon</a>
              <a href="#!">fbIcon</a>
              <a href="#!">instaIcon</a>
              <a href="#!">websiteIcon</a>
            </MDBRow>
            <MDBRow>
              {/** stand in for an unknown implementation of an image list class */}
              imageClub.get(0) imageCLub.get(1) imageClub.get(2)
              imageClub.get(3)
            </MDBRow>
            <MDBRow>
              imageClub.get(4) imageClub.get(5) imageClub.get(6)
              imageClub.get(7)
            </MDBRow>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Club;
