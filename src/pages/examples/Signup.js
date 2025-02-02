
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
            <Col sm={12} md={4} className="d-none d-md-block">
              <div className="d-flex align-items-center justify-content-center">
                <AuthSidebar />
              </div>
            </Col>
            <Col sm={12} md={8} className="">
              <Row className="login_right_section d-flex align-items-center justify-content-between">
                <Container className="mx-auto h-100 px-5 d-flex justify-content-between flex-column">
                  <div className="d-flex my-4 align-items-center justify-content-end">
                    <p className="m-0 fw-medium">Already have an account? <Button as={Link} to={Routes.Signin.path} variant="primary" className="ms-3 all_btn text-decoration-none">
                    {` Sign In `}
                    </Button></p>
                  </div>
                  <Row className="justify-content-center h-100">
                    <Col xs={12} className="d-flex align-items-center justify-content-center">
                      <div className="d-flex justify-content-between flex-column align-items">

                        <div className="bg-white shadow-soft border rounded border-light p-4 login_box">
                          <div className="text-center text-md-center mb-4 mt-md-0">
                            <h3 className="mb-0 fw-bold">Sign Up</h3>
                          </div>
                          <Form className="mt-4">
                            <Form.Group id="email" className="mb-2">
                              <Form.Label>Phone Number</Form.Label>
                              <InputGroup>
                                {/* <InputGroup.Text>
                                  <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text> */}
                                <Form.Control autoFocus required type="email" placeholder="example@company.com" />
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
                              <div className="d-flex justify-content-end align-items-center mb-4">
                                {/* <Form.Check type="checkbox">
                                  <FormCheck.Input id="defaultCheck5" className="me-2" />
                                  <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                                </Form.Check> */}
                                <Card.Link className="small text-end">Forgot Account?</Card.Link>
                              </div>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 all_btn">
                              Sign in
                            </Button>
                          </Form>

                          <div className="mt-3 mb-4 text-center or_text  position-relative">
                            <span className="fw-normal bg-white px-3 position-relative z-1">or</span>
                          </div>
                          <div className="d-flex justify-content-center mt-4">
                            <Button variant="outline-light" className="btn btn-pill text-facebook me-2 align-items-center d-flex justify-content-center flex-grow-1">
                              <img src={GoogleImg} alt="google" /><span className="ms-2">Google</span>
                            </Button>
                            <Button variant="outline-light" className="btn btn-pill text-facebook me-2 align-items-center d-flex justify-content-center flex-grow-1">
                              <img src={FbImg} alt="google" /><span className="ms-2">Facebook</span>
                            </Button>
                            {/* <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                              <FontAwesomeIcon icon={faTwitter} />
                            </Button> 
                            <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                              <FontAwesomeIcon icon={faGithub} />
                            </Button>*/}
                          </div>
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
