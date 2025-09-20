import React from "react";
import { Button } from "react-bootstrap";
import canciones from "../../db/MusicLoaded";

const TableRow = ({ cancion, setEditando, handleRemove, formatDate }) => {
  return (
    <>
      <tr key={cancion.id}>
        <td>
          {cancion.urlPortada && (
            <img
              src={cancion.urlPortada}
              alt="portada"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
          )}
        </td>
        <td>{cancion.titulo}</td>
        <td>{cancion.artista}</td>
        <td>
          {cancion.urlAudio && (
            <audio controls style={{ width: "300px" }}>
              <source src={cancion.urlAudio} type="audio/mp3" />
              Tu navegador no soporta el audio.
            </audio>
          )}
        </td>
        <td>{cancion.fechaDeCreacion}</td>

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
