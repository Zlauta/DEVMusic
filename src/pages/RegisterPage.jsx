import React from "react";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";
import FormRegister from "../components/auth/FormRegister";
import { Link, NavLink } from "react-router-dom";
import LogoRegister from "../assets/logo-register.png";

const RegisterPage = () => {
  return (
    <>
      <div
        className="d-flex align-items-center "
        style={{ minHeight: "100vh", backgroundColor: "rgb(14, 2, 15)" }}
      >
        <Container className="my-4">
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Card
                style={{
                  backgroundColor: "rgb(33, 37, 41)",
                  color: "white",
                }}
              >
                <Card.Body>
                  <div className=" d-flex justify-content-center">
                    <img src={LogoRegister} alt="logo" width={50} />
                  </div>

                  <h1
                    className="text-center mb-2"
                    style={{ color: "rgb(231, 108, 60)" }}
                  >
                    Registrate Ahora
                  </h1>

                  <h4
                    className="text-center"
                    style={{ color: "rgb(231, 108, 60)" }}
                  >
                    Disfruta de tus Canciones Favoritas
                  </h4>
                  <FormRegister></FormRegister>
                  <div className=" d-flex flex-column align-items-center ">
                    <Nav.Link as={Link} to="/">
                      ← Volver a Inicio
                    </Nav.Link>
                    <h6 className="mt-3 ">Ya tengo Cuenta →</h6>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default RegisterPage;
