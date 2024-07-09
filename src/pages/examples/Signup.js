
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup, } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";


export default () => {
  return (
    <main>
      <section className="d-flex align-items-center">
      <Col xs={12}>
        <Row className="">
            <Col md={12}  xl={4} className="d-flex align-items-center justify-content-center">
            <div className="vh-100 py-3 w-100">
            <div className="login_sidebar h-100 d-flex items-center flex-column p-5"></div>
            </div>
              
            </Col>
            <Col md={12}  xl={8} className="d-flex align-items-center justify-content-center">
              <Row>
                <Container className="mx-auto">
                <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 login_box">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign up</h3>
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
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
                      <Card.Link className="small text-end">Lost password?</Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100 all_btn">
                    Sign in
                  </Button>
                </Form>

                <div className="mt-3 mb-4 text-center or_text  position-relative">
                  <span className="fw-normal bg-white px-3 position-relative z-1">or</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                <Button variant="outline-light" className="btn btn-pill text-facebook me-2 flex-grow-1">
                    <FontAwesomeIcon icon={faGoogle} /><span className="ms-2">Google</span>
                  </Button>
                  <Button variant="outline-light" className="btn btn-pill text-facebook me-2 flex-grow-1">
                    <FontAwesomeIcon icon={faFacebookF} /><span className="ms-2">Facebook</span>
                  </Button>
                  {/* <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button> 
                  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>*/}
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to={Routes.Signup.path} className="fw-bold">
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
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
