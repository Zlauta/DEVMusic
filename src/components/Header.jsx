import React, { use, useEffect } from "react";
import { Container, InputGroup, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import LogoDev from "../assets/Logodev.png";
import { Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export const ADMIN_EMAIL = "admin@devmusic.com";

const Header = () => {
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  // correo único del admin

  useEffect(() => {
    const user = sessionStorage.getItem("usuarios"); // acá guardás tu user en login
    if (user) {
      const parsedUser = JSON.parse(user); // suponiendo que guardás un objeto {email, nombre}
      setIsLoggedIn(true);
      setUserEmail(parsedUser.email);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("usuarios");
    setIsLoggedIn(false);
    setUserEmail(null);
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscando:", search);
  };

  return (
    <div>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        style={{ border: "2px solid orange" }}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src={LogoDev} width={50} alt="logo" />
            DEVMusic
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {isLoggedIn && userEmail === ADMIN_EMAIL && (
                <Nav.Link as={NavLink} to="/admin">
                  Panel De Administrador
                </Nav.Link>
              )}
              <Nav.Link as={NavLink} to="/registro">
                Registrarse
              </Nav.Link>
              {!isLoggedIn ? (
                <Nav.Link as={NavLink} to="/login">
                  Iniciar Sesión
                </Nav.Link>
              ) : (
                <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>
              )}
            </Nav>

            {/* Barra de búsqueda */}

            <Form
              className="d-flex mt-2 mt-lg-0"
              onSubmit={handleSearch}
              style={{ flex: 1, maxWidth: "345px" }}
            >
              <FormControl
                type="search"
                placeholder="¿Que Quieres Reproducir?... "
                className="me-1 rounded-pill flex-grow-1"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={(e) => {
                  e.target.style.borderColor = "orange";
                  e.target.style.boxShadow =
                    "0 0 0 0.10rem rgba(252, 166, 54, 0.5)";
                  e.target.style.outline = "none";
                  e.target.style.transition = "box-shadow 0.3s ease-in-out";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "";
                  e.target.style.boxShadow = "0 0 2px orange";
                  e.target.style.outline = "none";
                  e.target.style.transition = "box-shadow 0.3s ease-in-out";
                }}
              />

              {/*boton de inicio*/}

              <Button
                variant="outline-light"
                type="button"
                className=" rounded-pill ms-3"
                onClick={() => navigate("/")} // redirige al Home
                onFocus={(e) => {
                  e.target.style.borderColor = "orange";
                  e.target.style.boxShadow =
                    "0 0 0 0.10rem rgba(252, 166, 54, 0.5)";
                  e.target.style.backgroundColor = "transparent"; // quita fondo

                  e.target.style.transition = "box-shadow 0.3s ease-in-out";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "";
                  e.target.style.boxShadow = "0 0 3px orange";
                  e.target.style.backgroundColor = "transparent"; // quita fondo
                  e.target.style.transition = "box-shadow 0.3s ease-in-out";
                }}
              >
                <i className="bi bi-house-heart "></i>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* aqui el diseño de la pagina */}
    </div>
  );
};

export default Header;
