import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import LogoDev from "../assets/logodev.png"
import LogoFooter from "../assets/logoFooteranimado.svg"

function Footer() {
  return (
    <footer style={{background:"#121212" }} className=" text-light py-4 mt-auto footer h-auto">
      <Container>
        <Row>
          <Col md={2} className="d-flex justify-content-center mt-5">
            <img src={LogoDev} alt="logo devmusic"  width={200} height={200} />
          </Col>
          <Col  md={8}><h4 className="d-flex justify-content-center mt-5">DEVs Creatives</h4>
          <div className="d-flex text-center justify-content-center">
              <div>
                <Nav>
                  <ul className="d-flex flex-column p-2">
                    
                      <a className="mt-2" href="#">Terminos y Condiciones</a>
                    
                     
                      <a className="mt-4" href="#">Nosotros</a>
                    
                      <a className="mt-4" href="#">Volver Al Inicio</a>
                   
                  </ul>
                </Nav>

              </div>
             
           </div>

          </Col>
          
        <Col md={2} className="d-flex justify-content-center mt-5">
          <img src={LogoFooter} width={200} alt="" />
        </Col> 
          <Col md={12} className="d-flex flex-column align-items-center mt-2">
            
            <h5>DEVMusic</h5>
            <p>© 2025 DEVs Creatives. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
