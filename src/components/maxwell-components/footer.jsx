import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            {/*<h5 className="title"></h5>*/}
            <p>
              built with love by the campush team
            </p>
          </MDBCol>
          <MDBCol md="6">
            {/*<h5 className="title"></h5>*/}
            <ul>
              <li className="list-unstyled">
                <a href="#!">about</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">contact</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">terms & conditions</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">privacy</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> campush </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;