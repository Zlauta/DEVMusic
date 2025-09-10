import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || "";

  // 🔹 Traer canciones de localStorage
  const cancionesGuardadas =
    JSON.parse(localStorage.getItem("canciones")) || [];

  // 🔹 Filtrar por nombre o artista
  const resultados = cancionesGuardadas.filter(
    (c) =>
      c.nombreCancion.toLowerCase().includes(query.toLowerCase()) ||
      c.nombreArtista.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      <h3 className="mt-4">Resultados para: "{query}"</h3>
      {resultados.length > 0 ? (
        <ul className="list-group my-4">
          {resultados.map((c) => (
            <li
              key={c.id}
              className="list-group-item d-flex justify-content-start w-75 mt-3 "
            >
              {c.urlPortada && (
                <img
                  className="me-3"
                  src={c.urlPortada}
                  alt="portada"
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
              )}
              <span className="d-flex flex-column text-center">
                {c.nombreCancion}
                <strong>{c.nombreArtista}</strong>
              </span>

              {c.urlAudio && (
                <audio controls style={{ height: "50px" }} className="ms-4">
                  <source src={c.urlAudio} type="audio/mpeg" />
                  Tu navegador no soporta el audio
                </audio>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mres text-muted">No se encontraron resultados.</p>
      )}
    </Container>
  );
};

export default SearchPage;
