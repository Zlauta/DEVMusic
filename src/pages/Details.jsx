import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Details.css";
import { obtenerCancionPorId } from "../service/musicsService";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cancion, setCancion] = useState(null);
  const [cargando, setCargando] = useState(true);

  // Cargar datos de la canción
  useEffect(() => {
    const cancionCargada = async () => {
      setCargando(true);
      // Simular delay de API
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Obtener la canción por ID
      const cancionEncontrada = obtenerCancionPorId(id);
      console.log("Cancion encontrada:", cancionEncontrada);
      setCancion(cancionEncontrada);
      setCargando(false);
    };

    cancionCargada();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (cargando) {
    return (
      <div className="details-loading">
        <Container className="text-center py-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="text-white mt-3">Cargando detalles de la canción...</p>
        </Container>
      </div>
    );
  }

  if (!cancion) {
    return (
      <div className="details-error">
        <Container className="text-center py-5">
          <h2 className="text-white">Canción no encontrada</h2>
          <p className="text-white-50">La canción que buscas no existe.</p>
          <Button variant="warning" onClick={handleGoBack}>
            Volver
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div className="details-page">
      <Container fluid className="py-4">
        {/* Header con botón de regreso */}
        <Row className="mb-4">
          <Col>
            <Button
              variant="outline-warning"
              onClick={handleGoBack}
              className="back-button"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              ← Volver
            </Button>
          </Col>
        </Row>

        {/* Contenido principal: imagen y detalles de la cancion. */}
        <Row className="justify-content-center">
          <Col xl={4} lg={5} md={6} sm={8} xs={10} className="mb-4">
            <Card className="album-card shadow-lg">
              <Card.Img
                variant="top"
                src={cancion.urlPortada}
                alt={cancion.nombreCancion}
                className="album-image"
              />
            </Card>
          </Col>

          <Col xl={8} lg={7} md={12} className="px-md-4">
            <div className="song-info">
              <h1 className="song-title">{cancion.nombreCancion}</h1>
              <h3 className="song-artist">{cancion.nombreArtista}</h3>
              <div className="song-meta mb-3">
                <Badge bg="danger" className="me-2">
                  {cancion.categoria}
                </Badge>
                <span className="text-white-50">• {cancion.duracion}</span>
                <span className="text-white-50">
                  • {cancion.anioLanzamiento}
                </span>
              </div>
              <div>
                <audio controls style={{ width: "100%" }} className="mb-2">
                  <source src={cancion.urlAudio} type="audio/mp3" />
                </audio>
              </div>
              <div className="additional-info">
                <h5 className="text-white mb-3">Información adicional</h5>
                <Row className="g-3">
                  <Col sm={6} xs={12}>
                    <div className="info-item">
                      <p className="text-white-50 mb-1">
                        <strong className="text-white">ID:</strong> {cancion.id}
                      </p>
                      <p className="text-white-50 mb-1">
                        <strong className="text-white">Género:</strong>{" "}
                        {cancion.categoria}
                      </p>
                    </div>
                  </Col>
                  <Col sm={6} xs={12}>
                    <div className="info-item">
                      <p className="text-white-50 mb-1">
                        <strong className="text-white">Duración:</strong>{" "}
                        {cancion.duracion}
                      </p>
                      <p className="text-white-50 mb-1">
                        <strong className="text-white">Año:</strong>{" "}
                        {cancion.anioLanzamiento}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
