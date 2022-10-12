import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <Navbar dark expand="md">
        <div className="container container-flex">
          <NavbarToggler onClick={handleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Ristorante Con Fusion"
            />
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span>
                  About Us
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span>
                  Menu
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <div className="jumbotron">
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
