import { Link } from "react-router-dom";
import animationError from "../assets/anim/milogoGigante.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "@fontsource/inter/400.css"; // peso normal
import "@fontsource/inter/700.css"; // peso bold
import React, { useEffect, useState } from "react";
import CheckboxTerms from "../components/CheckboxTerms";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const [count, setCount] = useState(8);
  const navigate = useNavigate();

  useEffect(() => {
    // Disminuye el contador cada 1 segundo
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    // Redirecciona cuando llega a 0
    if (count === 0) {
      return navigate("/");
    }

    return () => clearInterval(interval); // Limpia el intervalo
  }, [count]); // <-- Cierra useEffect y agrega dependencia

  return (
    <>
      <div id="errorpage" className="vh-100 vw-100 text-white">
        <section
          /* data-aos="flip-up" */
          id="Conteiner"
          className="text-center"
          style={{
            borderRadius: "5%",
            backgroundColor: "rgba(248, 149, 62, 1)",
          }}
        >
          {/* Texto */}
          <img
            src={animationError}
            alt="Imagen error"
            className=" animate-pulse-grow"
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "rgba(248, 149, 62, 1)",
              marginBottom: "10px",
            }}
          />

          <p
            className="lead"
            style={{
              fontSize: "1.5rem",
              fontFamily: "Odibee Sans, sans-serif",
            }}
          >
            OPSS... Parece que la pagina esta en mantenimiento
          </p>
          {/*   Contador */}
          <h1 id="contador" style={{ fontSize: "Verdana, sans-serif;" }}>
            Redirigiendo a la Home...
          </h1>
          <p className="lead">
            Serás redirigido en <strong>{count}</strong> segundos.
          </p>
          {/* Botón para volver */}
          <Link
            to="/"
            className="btn mb-3"
            style={{
              backgroundColor: "#E76C3C",
              border: "2px solid rgba(56, 59, 63, 0.62)",
              color: "white",
            }}
          >
            Volver al inicio
          </Link>
        </section>
        <CheckboxTerms />
      </div>
    </>
  );
};

export default Error404;
