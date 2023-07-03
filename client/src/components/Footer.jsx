import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Demo blog website created using React.js
          </Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
