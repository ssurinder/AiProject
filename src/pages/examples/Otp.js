
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup, } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleImg from '../../assets/images/google.svg'
import FbImg from '../../assets/images/facebook.svg'


import { Routes } from "../../routes";
import AuthSidebar from "../components/AuthSidebar";


export default () => {
  return (
    <main>
      <section className="d-flex align-items-center">
        <Col xs={12}>
          <Row className="">
            <Col md={12} xl={4} className="d-none d-md-block">
              <div className="d-flex align-items-center justify-content-center">
                <AuthSidebar />
              </div>
            </Col>
            <Col md={12} xl={8}>
              <Row className="login_right_section d-flex align-items-center justify-content-between">
                <Container className="mx-auto h-100 px-5 d-flex justify-content-between flex-column">
                  <Row className="justify-content-center h-100">
                    <Col xs={12} className="d-flex align-items-center justify-content-center">
                      <div className="d-flex justify-content-between flex-column align-items">

                        <div className="bg-white shadow-soft border rounded border-light p-4 login_box">
                          <div className="text-center text-md-center mb-4 mt-md-0">
                            <h3 className="mb-0 fw-bold">Enter OTP</h3>
                            <p className="otp_code mt-2"> Enter 4-digit code we just texted to your phone number +91 9855 6584 991</p>
                          </div>
                          <Form className="mt-4">
                            <Form.Group id="email" className="mb-2">
                              <Form.Label className="sr-only">Phone Number</Form.Label>
                              <InputGroup className="d-flex justify-content-center align-items-center">
                                {/* <InputGroup.Text>
                                  <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text> */}
                                <Form.Control autoFocus required type="email" className="mx-2 px-0 text-center otp-input" placeholder="-" />
                                <Form.Control autoFocus required type="email" className="mx-2 px-0 text-center otp-input" placeholder="-" />
                                <Form.Control autoFocus required type="email" className="mx-2 px-0 text-center otp-input" placeholder="-" />
                                <Form.Control autoFocus required type="email" className="mx-2 px-0 text-center otp-input" placeholder="-" />
                              </InputGroup>
                            </Form.Group>
                            <Form.Group>
                              {/* <Form.Group id="password" className="mb-4">
                                <Form.Label>Your Password</Form.Label>
                                <InputGroup>
                                  <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUnlockAlt} />
                                  </InputGroup.Text>
                                  <Form.Control required type="password" placeholder="Password" />
                                </InputGroup>
                              </Form.Group> */}
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 all_btn">
                              Submit
                            </Button>
                          </Form>

                          <div className="mt-3 mb-4 text-center or_text  position-relative">
                            <span className="fw-normal bg-white px-3 position-relative z-1">or</span>
                          </div>
                          <a className="d-block text-center" href="/">Reset Password</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <p className="text-center terms_page">Protected by reCAPTCHA and subject to the Rhombus<br /> <a href="/" className="text-decoration-none fw-bold">Privacy Policy</a> and <a href="/"  className="text-decoration-none fw-bold">Terms of Service</a>.</p>
                </Container>
              </Row>
            </Col>
          </Row>
        </Col>
        <Container>

          <p className="text-center">
            <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>

        </Container>
      </section>
    </main>
  );
};
