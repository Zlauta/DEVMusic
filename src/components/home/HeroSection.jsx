import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { Container } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <section
        style={{
          position: "relative",
          backgroundImage:
            "url('https://res.cloudinary.com/dobbi9v9x/image/upload/v1757371994/ChatGPT_Image_8_sept_2025_19_52_53_hqvgol.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        ></div>

        <Container
          style={{ position: "relative", zIndex: 2, textAlign: "center" }}
        >
          <h1 className="display-3 fw-bold">Bienvenido a DEVMusic</h1>
          <p className="lead mt-3">
            Descubrí tus canciones favoritas y escuchá los últimos lanzamientos
          </p>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
