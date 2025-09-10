// Terminos.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import terminos from "../components/terminos";

export default function Terminos() {
  const navigate = useNavigate();

  const aceptar = () => {
    navigate(-1); // vuelve a la página anterior
  };

  const rechazar = () => {
    navigate("/"); // redirige a la homepage
  };

  return (
    <div
      style={{
        backgroundColor: "#0E020F ",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="lead text-white m-2 rounded border-black"
        style={{
          backgroundColor: "#212529",
          padding: 24,
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <h1>Términos y Condiciones</h1>
        <p>
          {terminos.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>

        <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
          <Button style={{ backgroundColor: "#E76C3C" }} onClick={aceptar}>
            Aceptar
          </Button>
          <Button variant="warning" onClick={rechazar}>
            Rechazar
          </Button>
        </div>
      </div>
    </div>
  );
}
