import React, { useEffect, useState } from "react";
import {
  eliminarCancionPorId,
  obtenerCanciones,
} from "../../service/musicsService";
import TableRow from "./TableRow";
import CreatingMusicsModal from "./CreatingMusicsModal";
import EditMusicsModal from "./EditMusicsModal";
import Swal from "sweetalert2/dist/sweetalert2";
import { Button, Container, Table } from "react-bootstrap";
import { formatDate } from "../../utils/formatDate";

const MusicsTable = () => {
  formatDate();
  const [canciones, setCanciones] = useState([]);
  const [editando, setEditando] = useState(null);
  const [creando, setCreando] = useState(false);

  const load = () => setCanciones(obtenerCanciones());

  useEffect(() => {
    load();
    const onStorage = (e) => {
      if (e.key === "canciones") load();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleRemove = async (id) => {
    const res = await Swal.fire({
      title: "¿Eliminar Cancion?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#E76C3C",
    });
    if (res.isConfirmed) {
      eliminarCancionPorId(id);
      load();
      Swal.fire({
        title: "Eliminado",
        icon: "success",
        timer: 1200,
        showConfirmButton: false,
      });
    }
  };
  return (
    <div className="">
      <Container>
        <div className="d-flex justify-content-around my-3">
          <h5 className="p-1">Canciones Agregadas</h5>
          <Button
            style={{ background: "#E76C3C ", border: "none" }}
            onClick={() => setCreando(true)}
            className="btn p-2 "
          >
            Agregar Cancion
          </Button>
        </div>

        <Table className="m-0" bordered hover responsive>
          <thead>
            <tr>
              <th style={{ background: "#F8953E", minWidth: "30px" }}>#</th>
              <th style={{ background: "#F8953E", minWidth: "120px" }}>
                Cancion
              </th>
              <th style={{ background: "#F8953E", minWidth: "120px" }}>
                Artista
              </th>
              <th style={{ background: "#F8953E", minWidth: "140px" }}>
                Creado
              </th>
              <th style={{ background: "#F8953E", minWidth: "180px" }}>
                Accion
              </th>
            </tr>
          </thead>
          <tbody>
            {canciones.length ? (
              canciones.map((cancion, idx) => (
                <TableRow
                  key={cancion.id ?? idx}
                  idx={idx}
                  cancion={cancion}
                  setEditando={setEditando}
                  handleRemove={handleRemove}
                  formatDate={formatDate}
                />
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  No hay canciones registrados aún.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <div className="text-muted small ">
          <p className="">
            Total: {canciones.length} cancion
            {canciones.length === 1 ? "" : "es"}
          </p>
        </div>
      </Container>

      {creando && (
        <CreatingMusicsModal
          onClose={() => setCreando(false)}
          onSaved={() => {
            setCreando(false);
            load();
          }}
        />
      )}

      {editando && (
        <EditMusicsModal
          canciones={editando}
          onClose={() => setEditando(null)}
          onSaved={() => {
            setEditando(null);
            load();
          }}
        />
      )}
    </div>
  );
};

export default MusicsTable;
