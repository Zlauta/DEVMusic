import React from "react";
import { Button } from "react-bootstrap";

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
        <td>{cancion.nombreCancion}</td>
        <td>{cancion.nombreArtista}</td>
        <td>
          {cancion.urlAudio && (
            <audio controls style={{ width: "300px" }}>
              <source src={cancion.urlAudio} type="audio/mpeg" />
              Tu navegador no soporta el audio.
            </audio>
          )}
        </td>
        <td>{formatDate(cancion.createdAt)}</td>

        <td className="d-flex gap-2">
          <Button
            style={{ background: "#1A1D21" }}
            size="md"
            variant="secondary"
            onClick={() => setEditando(cancion)}
          >
            Editar
          </Button>
          <Button
            size="md"
            variant="danger"
            onClick={() => handleRemove(cancion.id)}
          >
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
