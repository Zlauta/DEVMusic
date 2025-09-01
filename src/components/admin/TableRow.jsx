import React from "react";
import { Button } from "react-bootstrap";

const TableRow = ({ cancion, idx, setEditando, handleRemove, formatDate }) => {
  return (
    <>
      <tr key={cancion.id}>
        <td>{idx + 1}</td>
        <td>{cancion.nombreCancion}</td>
        <td>{cancion.nombreArtista}</td>
        <td>{formatDate(cancion.createdAt)}</td>
        <td className="d-flex gap-2">
          <Button
            style={{ background: "#1A1D21" }}
            size="sm"
            variant="secondary"
            onClick={() => setEditando(cancion)}
          >
            Editar
          </Button>
          <Button
            size="sm"
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
