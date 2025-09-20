import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import LogoDev from "../assets/images/logodev.png";
import LogoFooter from "../assets/anim/logoFooteranimado.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{ background: "#121212" }}
      className=" text-light py-4 mt-auto footer h-auto"
    >
      <Container>
        <Row>
          <Col md={2} className="d-flex justify-content-center mt-5">
            <img src={LogoDev} alt="logo devmusic" width={150} height={150} />
          </Col>
          <Col md={8}>
            <h4 className="d-flex justify-content-center mt-5">DEVMusic</h4>
            <div className="d-flex text-center justify-content-center">
              <div>
                <Nav>
                  <ul className="d-flex flex-column p-2">
                    <Nav.Link as={NavLink} to="/terms" className="text-light">
                      Términos y Condiciones
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      to="/nosotros"
                      className="text-light mt-3"
                    >
                      Nosotros
                    </Nav.Link>
                  </ul>
                </Nav>
              </div>
            </div>
          </Col>

          <Col md={2} className="d-flex justify-content-center mt-4">
            <img src={LogoFooter} width={200} alt="" />
          </Col>
          <Col md={12} className="d-flex flex-column align-items-center mt-1">
            <h5>DEVs Creatives</h5>
            <p>© 2025 DEVs Creatives. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
