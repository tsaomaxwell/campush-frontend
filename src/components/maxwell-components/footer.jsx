import React from "react";
import { MDBCol, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="green" className="font-small pt-4 mt-4">
      <div id="footer-box" className="footer-copyright text-center py-3">
        <p></p>
        <MDBRow>
          <MDBCol size="4"></MDBCol>
          <MDBCol size="4">
            <a href="#!">about-</a>
            <a href="#!">-contact-</a>
            <a href="#!">-TOS-</a>
            <a href="#!">-privacy</a>
          </MDBCol>
          <MDBCol size="4"></MDBCol>
        </MDBRow>
        &copy; {new Date().getFullYear()} Copyright: <a href="#!"> campush </a>
        <p>built with love by the campush team</p>
      </div>
    </MDBFooter>
  );
};

export default Footer;
