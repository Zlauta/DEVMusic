import React, { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { actualizarCancion } from "../../service/musicsService";
import Swal from "sweetalert2/dist/sweetalert2";

const EditMusicsModal = ({ canciones, onSaved, onClose }) => {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    mode: "onchange",
    defaultValues: {
      nombreCancion: canciones?.nombreCancion ?? "",
      nombreArtista: canciones?.nombreArtista ?? "",
      urlPortada: canciones?.urlPortada ?? "",
      urlAudio: canciones?.urlAudio ?? "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await actualizarCancion(canciones.id, {
        nombreCancion: data.nombreCancion.trim(),
        nombreArtista: data.nombreArtista.trim(),
        urlPortada: data.urlPortada.trim(),
        urlAudio: data.urlAudio.trim(),
      });
      Swal.fire({
        title: "Cancion actualizada",
        icon: "success",
        timer: 1200,
        showConfirmButton: false,
      });
      onSaved?.();
    } catch (err) {
      if (err?.code === "CANCION_EXISTE") {
        Swal.fire({
          title: "Cancion ya registrada",
          text: "Esta cancion ya existe.",
          icon: "warning",
        });
      } else {
        console.error(err);
        Swal.fire({ title: "Error al actualizar", icon: "error" });
      }
    }
  };

  return (
    <div>
      <Modal show onHide={onClose} backdrop="static" centered>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Cancion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de la cancion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cancion"
                isInvalid={errors.nombreCancion}
                {...register("nombreCancion", {
                  required: "El Nombre de la cancion es obligatorio",
                  minLength: {
                    value: 3,
                    message: "El minimo de letra es de 3",
                  },
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombreCancion?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre del artista</Form.Label>
              <Form.Control
                type="text"
                placeholder="Artista"
                isInvalid={errors.nombreArtista}
                {...register("nombreArtista", {
                  required: "El Nombre del artista es obligatorio",
                  minLength: {
                    value: 3,
                    message: "El minimo de letra es de 3",
                  },
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombreArtista?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Portada (URL)</Form.Label>
              <Form.Control
                type="url"
                placeholder="Ej: https://ejemplo.com/portada.jpg"
                isInvalid={!!errors.urlPortada}
                {...register("urlPortada", {
                  required: true,
                  pattern: {
                    value: /^https?:\/\/.+/i,
                    message: "La URL debe comenzar con http:// o https://",
                  },
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.urlPortada?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Audio (URL)</Form.Label>
              <Form.Control
                type="url"
                placeholder="Ej: https://ejemplo.com/audio.mp3"
                isInvalid={!!errors.urlAudio}
                {...register("urlAudio", {
                  required: true,
                  pattern: {
                    value: /^https?:\/\/.+/i,
                    message: "La URL debe comenzar con http:// o https://",
                  },
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.urlAudio?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="text-muted small mt-2">
              Creado:{" "}
              {canciones?.createdAt
                ? new Date(canciones.createdAt).toLocaleString()
                : "-"}{" "}
              {canciones?.updatedAt &&
                `Actualizado: ${new Date(
                  canciones.updatedAt
                ).toLocaleString()}`}
            </div>
            <Modal.Footer>
              <Button type="submit" variant="secondary" onClick={onClose}>
                Cerrar
              </Button>
              <Button
                style={{ background: "#E76C3C", border: "none" }}
                type="submit"
                variant="primary"
                disabled={isSubmitting || !isDirty}
              >
                Guardar Cambios
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Form>
      </Modal>
    </div>
  );
};

export default EditMusicsModal;
