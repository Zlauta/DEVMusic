import React from "react";
import { Button } from "react-bootstrap";
import canciones from "../../db/MusicLoaded";

const TableRow = ({ cancion, setEditando, handleRemove, formatDate }) => {
  return (
    <>
      <tr key={canciones.id}>
        <td>
          {canciones.urlPortada && (
            <img
              src={canciones.urlPortada}
              alt="portada"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
          )}
        </td>
        <td>{canciones.titulo}</td>
        <td>{canciones.artista}</td>
        <td>
          {canciones.urlAudio && (
            <audio controls style={{ width: "300px" }}>
              <source src={canciones.urlAudio} type="audio/mp3" />
              Tu navegador no soporta el audio.
            </audio>
          )}
        </td>
        <td>{canciones.fechaDeCreacion}</td>

        <td className="d-flex gap-2">
          <Button
            style={{ background: "#1A1D21" }}
            size="md"
            variant="secondary"
            onClick={() => setEditando(canciones)}
          >
            Editar
          </Button>
          <Button
            size="md"
            variant="danger"
            onClick={() => handleRemove(canciones.id)}
          >
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
