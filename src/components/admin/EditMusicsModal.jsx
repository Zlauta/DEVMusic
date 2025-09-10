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
      duracion: canciones?.duracion ?? "",
      anioLanzamiento: canciones?.anioLanzamiento ?? "",
      categoria: canciones?.categoria ?? "",
      urlPortada: canciones?.urlPortada ?? "",
      urlAudio: canciones?.urlAudio ?? "",
    },
  });

  const currentYear = new Date().getFullYear();

  const onSubmit = async (data) => {
    try {
      await actualizarCancion(canciones.id, {
        nombreCancion: data.nombreCancion.trim(),
        nombreArtista: data.nombreArtista.trim(),
        duracion: data.duracion.trim(),
        anioLanzamiento: data.anioLanzamiento.trim(),
        categoria: data.categoria.trim(),
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

            <Form.Group className="mb-3">
              <Form.Label>Duracion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Duracion"
                isInvalid={!!errors.duracion}
                {...register("duracion", {
                  required: "La duracion de la cancion es obligatorio",
                  maxLength: { value: 5, message: "Maximo caracteres 5" },
                  minLength: { value: 4, message: "Minimo caracteres 4" },
                  pattern: {
                    value: /^[0-5]?\d:[0-5]\d$/,
                    message:
                      "La duración debe tener el formato mm:ss (ej: 03:45)",
                  },
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.duracion?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Año de lanzamiento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Año de lanzamiento"
                isInvalid={!!errors.anioLanzamiento}
                {...register("anioLanzamiento", {
                  required: "El año de lanzamiento es obligatorio",
                  pattern: {
                    value: /^\d{4}$/,
                    message: "El año debe tener 4 dígitos",
                  },
                  validate: (value) =>
                    value >= 1900 && value <= currentYear
                      ? true
                      : `El año debe estar entre 1900 y ${currentYear}`,
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.anioLanzamiento?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Categoria"
                isInvalid={!!errors.categoria}
                {...register("categoria", {
                  required: "La categoria es obligatorio",
                  minLength: { value: 4, message: "Mínimo 4 caracteres" },
                  maxLength: { value: 15, message: "Maximo caracteres 15" },
                  pattern: {
                    value: /^[\p{L}]+(?: [\p{L}]+)*$/u,
                    message:
                      "La categoría solo puede contener letras y espacios",
                  },
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.categoria?.message}
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
