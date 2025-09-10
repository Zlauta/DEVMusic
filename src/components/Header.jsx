import React, { use, useEffect } from "react";
import { Container, InputGroup, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import LogoDev from "../assets/Logodev.png";
import { Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2/dist/sweetalert2";
import { obtenerCanciones } from "../service/musicsService";

export const ADMIN_EMAIL = "admin@devmusic.com";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchText.trim() === "") {
      setSearchSuggestions([]);
      return;
    }
    // Traemos las canciones del localStorage
    const cancionesGuardadas = obtenerCanciones();
    // Filtramos según lo que escribe el usuario
    const coincidencias = cancionesGuardadas.filter(
      (c) =>
        c.nombreCancion.toLowerCase().includes(searchText.toLowerCase()) ||
        c.nombreArtista.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchSuggestions(coincidencias);
  }, [searchText]);

  useEffect(() => {
    const user = sessionStorage.getItem("usuarios"); // acá guardás tu user en login
    if (user) {
      const parsedUser = JSON.parse(user); // suponiendo que guardás un objeto {email, nombre}
      setIsLoggedIn(true);
      setUserEmail(parsedUser.email);
    }
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "¿Seguro que quieres cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "orange",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("usuario");
        setIsLoggedIn(false);
        setUserEmail(null);

        Swal.fire({
          title: "Sesión cerrada",
          text: "Has cerrado sesión correctamente.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        navigate("/");
      }
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim() === "") return;

    navigate(`/search?q=${encodeURIComponent(searchText)}`);
    setSearchText("");
    setSearchSuggestions([]); // limpiamos sugerencias
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
              {!isLoggedIn && (
                <Nav.Link as={NavLink} to="/registro">
                  Registrarse
                </Nav.Link>
              )}
              {!isLoggedIn ? (
                <Nav.Link as={NavLink} to="/login">
                  Iniciar Sesión
                </Nav.Link>
              ) : (
                <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>
              )}
              <Nav.Link as={NavLink} to="/contacto">
                Contactanos
              </Nav.Link>
            </Nav>

            {/* Barra de búsqueda */}

            <Form
              className="d-flex mt-2 mt-lg-0"
              onSubmit={handleSearchSubmit}
              style={{ flex: 1, maxWidth: "345px" }}
            >
              <FormControl
                type="search"
                placeholder="¿Qué quieres reproducir?"
                className="me-1 rounded-pill"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
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
              {searchSuggestions.length > 0 && (
                <ul
                  className="list-group position-absolute w-100 mt-5"
                  style={{ zIndex: 1000 }}
                >
                  {searchSuggestions.map((c) => (
                    <li
                      key={c.id}
                      className="list-group-item list-group-item-action"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(
                          `/search?q=${encodeURIComponent(c.nombreCancion)}`
                        );
                        setSearchText("");
                        setSearchSuggestions([]);
                      }}
                    >
                      🎵 {c.nombreCancion} — <strong>{c.nombreArtista}</strong>
                    </li>
                  ))}
                </ul>
              )}
            </Form>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* aqui el diseño de la pagina */}
    </div>
  );
};

export default Header;
