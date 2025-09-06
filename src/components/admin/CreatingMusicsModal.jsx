import React from "react";
import { agregarCancion, obtenerCanciones } from "../../service/musicsService";
import { useForm } from "react-hook-form";
import { Form, Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";

const CreatingMusicsModal = ({ onClose, onSaved }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nombreCancion: "",
      nombreArtista: "",
    },
  });

  const onSubmit = (data) => {
    const canciones = obtenerCanciones();
    const dup = canciones.some(
      (cancion) => cancion.nombreCancion === data.nombreCancion.trim()
    );
    if (dup) {
      Swal.fire({ title: "Cancion ya registrada", icon: "warning" });
      return;
    }

    const nuevaCancion = {
      id: Date.now(),
      nombreCancion: data.nombreCancion.trim(),
      nombreArtista: data.nombreArtista.trim(),
      createdAt: new Date().toISOString(),
    };

    agregarCancion(nuevaCancion);
    reset();
    Swal.fire({
      title: "Musica Agregada",
      icon: "success",
      timer: 1200,
      showConfirmButton: false,
    });
    onSaved?.();
  };

  return (
    <>
      <Modal show onHide={onClose} backdrop="static" centered>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Nueva Cancion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de la Cancion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cancion"
                isInvalid={!!errors.nombreCancion}
                {...register("nombreCancion", {
                  required: "Agregar la musica es obligatorio",
                  minLength: { value: 2, message: "Mínimo 4 caracteres" },
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombreCancion?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre del Artista</Form.Label>
              <Form.Control
                type="text"
                placeholder="Artista"
                isInvalid={!!errors.nombreArtista}
                {...register("nombreArtista", {
                  required: "Nombre del artista es obligatorio",
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombreArtista?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              style={{ background: "#E76C3C", border: "none" }}
              type="submit"
              disabled={isSubmitting || !isDirty}
            >
              Crear
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreatingMusicsModal;
