import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Details.css';
import { getSongById } from '../data/songsData';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);

  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 100,
      delay: 100
    });
  }, []);

  // Cargar datos de la canción
  useEffect(() => {
    const loadSong = async () => {
      setLoading(true);
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Obtener la canción por ID
      const foundSong = getSongById(id);
      setSong(foundSong);
      setLoading(false);
    };
    
    loadSong();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handlePlaySong = () => {
    if (song?.audioUrl) {
      console.log('Reproduciendo:', song.title);
    }
  };

  if (loading) {
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

  if (!song) {
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
      {/* Efecto de partículas flotantes */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
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
            <Card 
              className="album-card shadow-lg" 
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <Card.Img 
                variant="top" 
                src={song.imageUrl} 
                alt={song.title}
                className="album-image"
              />
              <div className="album-overlay">
                <div className="play-icon">
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </Card>
          </Col>

          <Col xl={8} lg={7} md={12} className="px-md-4">
            <div className="song-info" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
              <h1 className="song-title" data-aos="fade-up" data-aos-delay="600">{song.title}</h1>
              <h3 className="song-artist" data-aos="fade-up" data-aos-delay="700">{song.artist}</h3>
              <div className="song-meta mb-3" data-aos="fade-up" data-aos-delay="800">
                <Badge bg="danger" className="me-2">{song.category}</Badge>
                <span className="text-white-50">• {song.duration}</span>
                <span className="text-white-50 ms-2">• {song.year}</span>
                {song.explicit && <Badge bg="danger" className="ms-2">E</Badge>}
              </div>
              
              {/* Botones de acción */}
              <div className="action-buttons mb-4" data-aos="fade-up" data-aos-delay="900">
                <div className="d-flex flex-wrap gap-2">
                  <Button 
                    variant="warning" 
                    size="lg" 
                    className="play-button flex-fill flex-md-grow-0"
                    onClick={handlePlaySong}
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                  >
                    ▶ Reproducir
                  </Button>
                  <Button 
                    variant="outline-warning" 
                    size="lg"
                    className="flex-fill flex-md-grow-0"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    ♥ Favoritos
                  </Button>
                </div>
              </div>

              {/* Información adicional */}
              <div className="additional-info" data-aos="fade-up" data-aos-delay="1200">
                <h5 className="text-white mb-3">Información adicional</h5>
                <Row className="g-3">
                  <Col sm={6} xs={12}>
                    <div className="info-item">
                      <p className="text-white-50 mb-1">
                        <strong className="text-white">ID:</strong> {song.id}
                      </p>
                      <p className="text-white-50 mb-1">
                        <strong className="text-white">Género:</strong> {song.genre}
                      </p>
                      <p className="text-white-50 mb-1">
                        <strong className="text-white">Popularidad:</strong> {song.popularity}%
                      </p>
                    </div>
                  </Col>
                  <Col sm={6} xs={12}>
                    <div className="info-item">
                      <p className="text-white-50 mb-1">
                        <strong className="text-white">Álbum:</strong> {song.album}
                      </p>
                      <p className="text-white-50 mb-1">
                        <strong className="text-white">Duración:</strong> {song.duration}
                      </p>
                      <p className="text-white-50 mb-1">
                        <strong className="text-white">Año:</strong> {song.year}
                      </p>
                    </div>
                  </Col>
                </Row>
                {song.description && (
                  <div className="mt-3">
                    <h6 className="text-white">Descripción</h6>
                    <p className="text-white-50">{song.description}</p>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
