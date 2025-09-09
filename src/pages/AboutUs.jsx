import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Lautaro from "../assets/LautaroZarate.jpg";
import Nicolas from "../assets/NicolasKreisel.jpg";
import Paula from "../assets/PaulaRodriguez.jpg";
import Matias from "../assets/MatiasSoria.jpg";
import Nadia from "../assets/NadiaMedina.jpg";
//import Nicolas from "../assets/NicolasKreisel.jpg";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const formatDate = (date) => {
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
  };

  const formatTime = (date) => {
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
  };

  // Datos de los integrantes del equipo
  const teamMembers = [
    {
      name: "Lautaro Zarate",
      role: "Desarrollador",
      photoUrl: Lautaro,
      githubUrl: "https://github.com/Zlauta",
      linkedinUrl: "/error404"
    },
    {
      name: "Nicolas Kreisel",
      role: "Desarrollador",
      photoUrl: Nicolas,
      githubUrl: "https://github.com/NicolasKreisel",
      linkedinUrl: "/error404"
    },
    {
      name: "Pablo Torres",
      role: "Desarrollador",
      photoUrl: "/assets/team3.jpg",
      githubUrl: "https://github.com/pablotorres-dot",
      linkedinUrl: "/error404"
    },
    {
      name: "Paula Rodriguez",
      role: "Desarrollador",
      photoUrl: Paula,
      githubUrl: "https://github.com/rzpau",
      linkedinUrl: "/error404"
    },
    {
      name: "Matias Soria",
      role: "Desarrollador",
      photoUrl: Matias,
      githubUrl: "https://github.com/eliceo09",
      linkedinUrl: "/error404"
    },
    {
      name: "Nadia Medina",
      role: "Desarrollador",
      photoUrl: Nadia,
      githubUrl: "https://github.com/nadiaamedina",
      linkedinUrl: "/error404"
    }
  ];

  return (
    <div style={{ backgroundColor: "#0E020F", minHeight: "100vh", padding: "2rem 0" }}>
      <Container fluid>
        {/* Hero Section */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} lg={10}>
            <Card style={{
              background: "linear-gradient(135deg, #1A1D21, #212529)",
              padding: "3rem 2rem",
              borderRadius: "20px",
              marginBottom: "3rem",
              boxShadow: "0 8px 32px rgba(231, 108, 60, 0.4)",
              border: "2px solid #E76C3C",
              animation: "fadeInUp 0.4s ease-out",
            }}>
              <Card.Body className="text-center">
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#F8953E", marginBottom: "1rem", textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                  Sobre Nosotros
                </h1>
                <h2 style={{ fontSize: "1.5rem", color: "#EC773C", marginBottom: "1.5rem", fontWeight: "600" }}>
                  Conoce al equipo detrás de DEVMusic
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#ffffff", maxWidth: "600px", margin: "0 auto", opacity: "0.95" }}>
                  Somos un equipo apasionado de desarrolladores y diseñadores que trabajamos 
                  juntos para crear la mejor experiencia musical digital. Cada miembro aporta 
                  su expertise único para hacer de DEVMusic una plataforma excepcional.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Fecha/Hora */}
        <Row className="justify-content-center" style={{ marginTop: "4rem", marginBottom: "4rem" }}>
          <Col xs={12} lg={6}>
            <Card style={{
              backgroundColor: "#1A1D21",
              border: "2px solid #F8953E",
              borderRadius: "15px",
              padding: "1rem 1.5rem",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(248, 149, 62, 0.3)",
              transition: "all 0.3s ease",
              animation: "fadeInUp 0.4s ease-out 0.1s both",
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(248, 149, 62, 0.5)";
              e.currentTarget.style.borderColor = "#EC773C";
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(248, 149, 62, 0.3)";
              e.currentTarget.style.borderColor = "#F8953E";
            }}>
              <Card.Body style={{ padding: "0.5rem" }}>
                <h3 style={{ color: "#F8953E", marginBottom: "0.5rem", fontSize: "1.1rem", fontWeight: "600" }}>
                  Información Actual
                </h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ fontSize: "1rem", marginBottom: "0", color: "white", fontWeight: "500" }}>
                    <strong style={{ color: "#EC773C" }}>Fecha:</strong> {formatDate(currentDateTime)}
                  </p>
                  <p style={{ fontSize: "1rem", marginBottom: "0", color: "white", fontWeight: "500" }}>
                    <strong style={{ color: "#EC773C" }}>Hora:</strong> {formatTime(currentDateTime)}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Cards de integrantes */}
        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col xs={12} lg={10} key={index} className="mb-4">
              <Card ref={(el) => (cardRefs.current[index] = el)} data-index={index} style={{
                backgroundColor: "#1A1D21",
                border: "2px solid #E76C3C",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                opacity: visibleCards.has(index) ? 1 : 0,
                transform: visibleCards.has(index) ? "translateY(0)" : "translateY(30px)",
                boxShadow: "0 4px 20px rgba(231, 108, 60, 0.2)",
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(231, 108, 60, 0.5)";
                e.currentTarget.style.borderColor = "#F8953E";
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = visibleCards.has(index) ? "translateY(0)" : "translateY(30px)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(231, 108, 60, 0.2)";
                e.currentTarget.style.borderColor = "#E76C3C";
              }}>
                <Row className="g-0">
                  {/* Desktop */}
                  <Col md={6} className={`d-none d-md-block ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                    <div style={{
                      height: "300px",
                      backgroundImage: `url(${member.photoUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: "#212529",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "1.2rem",
                    }}>
                      {!member.photoUrl.includes("team") && ""}
                    </div>
                  </Col>
                  <Col md={6} className={`d-none d-md-block ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                    <Card.Body style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", height: "300px", color: "white" }}>
                      <h3 style={{ color: "#F8953E", marginBottom: "1rem", fontSize: "1.5rem", fontWeight: "bold", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
                        {member.name}
                      </h3>
                      <p style={{ color: "#EC773C", fontSize: "1.1rem", marginBottom: "2rem", fontWeight: "500" }}>
                        {member.role}
                      </p>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <Button variant="outline-light" style={{ border: "2px solid #EC773C", color: "#EC773C", backgroundColor: "transparent", borderRadius: "25px", padding: "0.5rem 1.5rem", transition: "all 0.3s ease", fontWeight: "500" }} onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#EC773C";
                          e.target.style.color = "white";
                          e.target.style.transform = "translateY(-2px)";
                          e.target.style.boxShadow = "0 4px 15px rgba(236, 119, 60, 0.4)";
                        }} onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.color = "#EC773C";
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = "none";
                        }} href={member.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver perfil de GitHub de ${member.name}`}>
                          GitHub
                        </Button>
                        <Link to={member.linkedinUrl} style={{ border: "2px solid #F8953E", color: "#F8953E", backgroundColor: "transparent", borderRadius: "25px", padding: "0.5rem 1.5rem", transition: "all 0.3s ease", fontWeight: "500", textDecoration: "none", display: "inline-block" }} onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#F8953E";
                          e.target.style.color = "white";
                          e.target.style.transform = "translateY(-2px)";
                          e.target.style.boxShadow = "0 4px 15px rgba(248, 149, 62, 0.4)";
                        }} onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.color = "#F8953E";
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = "none";
                        }} aria-label={`Ver perfil de LinkedIn de ${member.name}`}>
                          LinkedIn
                        </Link>
                      </div>
                    </Card.Body>
                  </Col>

                  {/* Mobile */}
                  <Col xs={12} className="d-md-none">
                    <div style={{
                      height: "200px",
                      backgroundImage: `url(${member.photoUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: "#212529",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "1rem",
                    }}>
                      {!member.photoUrl.includes("team") && "Foto del miembro"}
                    </div>
                    <Card.Body style={{ padding: "1.5rem", textAlign: "center", color: "white" }}>
                      <h3 style={{ color: "#F8953E", marginBottom: "0.5rem", fontSize: "1.5rem", fontWeight: "bold", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
                        {member.name}
                      </h3>
                      <p style={{ color: "#EC773C", fontSize: "1rem", marginBottom: "1.5rem", fontWeight: "500" }}>
                        {member.role}
                      </p>
                      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                        <Button variant="outline-light" style={{ border: "2px solid #EC773C", color: "#EC773C", backgroundColor: "transparent", borderRadius: "25px", padding: "0.5rem 1.5rem", transition: "all 0.3s ease", fontWeight: "500", width: "200px" }} onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#EC773C";
                          e.target.style.color = "white";
                          e.target.style.transform = "translateY(-2px)";
                          e.target.style.boxShadow = "0 4px 15px rgba(236, 119, 60, 0.4)";
                        }} onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.color = "#EC773C";
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = "none";
                        }} href={member.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver perfil de GitHub de ${member.name}`}>
                          GitHub
                        </Button>
                        <Link to={member.linkedinUrl} style={{ border: "2px solid #F8953E", color: "#F8953E", backgroundColor: "transparent", borderRadius: "25px", padding: "0.5rem 1.5rem", transition: "all 0.3s ease", fontWeight: "500", width: "200px", textDecoration: "none", display: "inline-block", textAlign: "center" }} onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#F8953E";
                          e.target.style.color = "white";
                          e.target.style.transform = "translateY(-2px)";
                          e.target.style.boxShadow = "0 4px 15px rgba(248, 149, 62, 0.4)";
                        }} onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.color = "#F8953E";
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = "none";
                        }} aria-label={`Ver perfil de LinkedIn de ${member.name}`}>
                          LinkedIn
                        </Link>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Botón Volver al inicio */}
        <Row className="justify-content-center mt-5">
          <Col xs={12} className="text-center">
            <Link to="/" style={{
              backgroundColor: "#F8953E",
              border: "2px solid #EC773C",
              color: "white",
              borderRadius: "30px",
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(248, 149, 62, 0.4)",
              textDecoration: "none",
              display: "inline-block",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            }} onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#EC773C";
              e.target.style.borderColor = "#E76C3C";
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 8px 25px rgba(236, 119, 60, 0.5)";
            }} onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#F8953E";
              e.target.style.borderColor = "#EC773C";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(248, 149, 62, 0.4)";
            }}>
              Volver al inicio
            </Link>
          </Col>
        </Row>
      </Container>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .container { padding: 1rem; }
          h1 { font-size: 2rem !important; }
          h2 { font-size: 1.2rem !important; }
        }
        @media (max-width: 360px) {
          h1 { font-size: 1.8rem !important; }
          .btn { padding: 0.8rem 1.5rem !important; font-size: 1rem !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}
