import React, { useState, useRef } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState({
    isNavOpen: false,
    isModalOpen: false,
  });
  let { username, password, remember } = useRef();
  const handleNav = () => {
    setIsOpen({ ...isOpen, isNavOpen: !isOpen.isNavOpen });
  };
  const toggleModal = () => {
    setIsOpen({ ...isOpen, isModalOpen: !isOpen.isModalOpen });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    toggleModal();
    alert(
      "Username: " +
        username.value +
        " Password: " +
        password.value +
        " Remember: " +
        remember.checked
    );
  };

  return (
    <>
      <Modal isOpen={isOpen.isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                ref={username}
                innerRef={(input) => (username = input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                innerRef={(input) => (password = input)}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="remember"
                  innerRef={(input) => (remember = input)}
                />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
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
          <Collapse isOpen={isOpen.isNavOpen} navbar>
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
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button outline onClick={toggleModal}>
              <span className="fa fa-sign-in fa-lg"></span> Login
            </Button>
          </NavItem>
        </Nav>
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
