import React from "react";
import FormLogin from "../components/auth/FormLogin";
import { Card, Col, Container, Row } from "react-bootstrap";
import LogoRegister from "../assets/logo-register.png";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
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
                    Iniciar Secion
                  </h1>

                  <h4
                    className="text-center"
                    style={{ color: "rgb(231, 108, 60)" }}
                  >
                    Disfruta de tus Canciones Favoritas
                  </h4>
                  <FormLogin></FormLogin>
                  <div className=" d-flex flex-column align-items-center ">
                    <h6 className="mt-4 ">← Volver a Inicio</h6>
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

export default LoginPage;
