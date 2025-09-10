import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { obtenerCanciones } from "../../service/musicsService";

const MusicSection = () => {
  const [canciones, setCanciones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCanciones(obtenerCanciones);
  }, []);

  const ultimas = [...canciones].slice(-4).reverse();
  const populares = [...canciones]
    .sort((a, b) => (b.reproducciones || 0) - (a.reproducciones || 0))
    .slice(0, 4);

  const verDetalles = (id) => {
    navigate(`/detalles/${id}`);
  };

  return (
    <>
      <Container className="mt-5">
        {/* Sección 1: Últimas agregadas */}
        <h2 className="mb-4 text-light text-center ">Últimas agregadas</h2>
        <Row>
          {ultimas.length > 0 ? (
            ultimas.map((music) => (
              <Col md={3} key={music.id} className="mb-3">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    style={{ height: "200px" }}
                    variant="top"
                    src={music.urlPortada || "https://via.placeholder.com/150"}
                  />
                  <Card.Body className="d-flex flex-column justify-content-end">
                    <Card.Title>{music.nombreCancion}</Card.Title>
                    <Card.Text>{music.nombreArtista}</Card.Text>
                    <Button
                      variant="warning"
                      onClick={() => verDetalles(music.id)}
                    >
                      Ver detalles
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No hay canciones cargadas todavía.</p>
          )}
        </Row>

        {/* Sección 2: Populares */}
        <h2 className="mt-5 mb-5 text-light text-center">Más escuchadas</h2>
        <Row>
          {populares.map((music) => (
            <Col md={3} key={music.id} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={music.urlPortada || "https://via.placeholder.com/150"}
                />
                <Card.Body className="d-flex flex-column justify-content-end">
                  <Card.Title>{music.nombreCancion}</Card.Title>
                  <Card.Text>{music.nombreArtista}</Card.Text>
                  <Button
                    variant="warning"
                    onClick={() => verDetalles(music.id)}
                  >
                    Ver detalles
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Sección 3: Todas las canciones */}
        <h2 className="mt-5 mb-5 text-light text-center">
          Todas las canciones
        </h2>
        <Row>
          {canciones.map((music) => (
            <Col md={3} key={music.id} className="mb-5">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={music.urlPortada || "https://via.placeholder.com/150"}
                />
                <Card.Body className="d-flex flex-column justify-content-end">
                  <Card.Title>{music.nombreCancion}</Card.Title>
                  <Card.Text>{music.nombreArtista}</Card.Text>
                  <Button
                    variant="warning"
                    onClick={() => verDetalles(music.id)}
                  >
                    Ver detalles
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MusicSection;
