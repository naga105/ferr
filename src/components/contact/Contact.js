import React, { useState, useCallback, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";

import { Link } from "react-router-dom";
function Contact(props) {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: "",
    touched: {
      firstname: false,
      lastname: false,
      telnum: false,
      email: false,
    },
  });

  const handleBlur = (field) => (evt) => {
    setInput({
      ...input,
      touched: { ...input.touched, [field]: true },
    });
  };
  const handleInputChange = useCallback(
    (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
      console.log(input.firstname.length);
    },
    [input]
  );
  function validate(firstname, lastname, telnum, email) {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };
    if (input.touched.firstname && firstname.length < 3)
      errors.firstname = "First Name should be >= 3 characters";
    else if (input.touched.firstname && firstname.length > 10)
      errors.firstname = "First Name should be <= 10 characters";
    if (input.touched.lastname && lastname.length < 3)
      errors.lastname = "Last Name should be >= 3 characters";
    else if (input.touched.lastname && lastname.length > 10)
      errors.lastname = "Last Name should be <= 10 characters";
    const reg = /^\d+$/;
    if (input.touched.telnum && !reg.test(telnum))
      errors.telnum = "Tel. Number should contain only numbers";
    if (
      input.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    )
      errors.email = "Email should contain a @";
    return errors;
  }
  const errors = validate(
    input.firstname,
    input.lastname,
    input.telnum,
    input.email
  );

  const handleSubmit = (values) => {
    props.postFeedbackForm(
      input.firstname,
      input.lastname,
      input.telnum,
      input.email,
      input.agree,
      input.contactType,
      input.message
    );
  };
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form model="feedback" onSubmit={handleSubmit}>
            <Row className="form-group">
              <Label htmlFor="firstname" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".firstname"
                  id="firstname"
                  value={input.firstname}
                  name="firstname"
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="lastname" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".lastname"
                  id="lastname"
                  name="lastname"
                  onChange={handleInputChange}
                  value={input.lastname}
                  placeholder="Last Name"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="telnum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                <Control.text
                  model=".telnum"
                  id="telnum"
                  name="telnum"
                  placeholder="Tel. Number"
                  value={input.telnum}
                  className="form-control"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Control.text
                  model=".email"
                  id="email"
                  value={input.email}
                  name="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 6, offset: 2 }}>
                <div className="form-check">
                  <Label check>
                    <Control.checkbox
                      model=".agree"
                      name="agree"
                      onChange={handleInputChange}
                      value={input.agree}
                      className="form-check-input"
                    />{" "}
                    <strong>May we contact you?</strong>
                  </Label>
                </div>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Control.select
                  model=".contactType"
                  name="contactType"
                  onChange={handleInputChange}
                  value={input.contactType}
                  className="form-control"
                >
                  <option>Tel.</option>
                  <option>Email</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="message" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  onChange={handleInputChange}
                  value={input.message}
                  rows="12"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>

      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>:{" "}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a role="button" className="btn btn-info">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net"
            >
              <i
                className="fa 
fa-envelope-o"
              ></i>{" "}
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
