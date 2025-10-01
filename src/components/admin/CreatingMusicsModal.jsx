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
      duracion: "",
      anioLanzamiento: "",
      categoria: "",
      genero: "",
      urlPortada: "",
      urlAudio: "",
    },
  });

  const currentYear = new Date().getFullYear();

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
      duracion: data.duracion.trim(),
      anioLanzamiento: data.anioLanzamiento.trim(),
      categoria: data.categoria.trim(),
      genero: data.genero.trim(),
      urlPortada: data.urlPortada.trim(),
      urlAudio: data.urlAudio.trim(),
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
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                  maxLength: { value: 20, message: "Maximo caracteres 20" },
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
                  pattern: {
                    value: /^[\p{L}]+(?: [\p{L}]+)*$/u,
                    message: "El artista solo puede contener letras y espacios",
                  },
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                  maxLength: { value: 20, message: "Maximo caracteres 20" },
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
              <Form.Label>Género</Form.Label>
              <Form.Select
                {...register("genero", {
                  required: "El género es obligatorio",
                })}
              >
                <option value="">Seleccionar género...</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="cumbia">Cumbia</option>
                <option value="reggaeton">Reggaetón</option>
                <option value="electronica">Electrónica</option>
                <option value="jazz">Jazz</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.genero?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Categoría</Form.Label>
              <Form.Select
                {...register("categoria", {
                  required: "La categoría es obligatoria",
                })}
              >
                <option value="">Seleccionar categoría...</option>
                <option value="album">Álbum</option>
                <option value="single">Single</option>
                <option value="ep">EP</option>
                <option value="live">En Vivo</option>
                <option value="remix">Remix</option>
              </Form.Select>
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
