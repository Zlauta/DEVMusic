import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2/dist/sweetalert2.js";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nombreUsuario: "",
      password: "",
    },
  });

  function obtenerUsuariosDeLocalStorage() {
    try {
      const listadoUsuariosJSON = localStorage.getItem("usuarios");
      const listadoUsuarios = JSON.parse(listadoUsuariosJSON);
      return listadoUsuarios ? listadoUsuarios : [];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  function onSubmit(data) {
    try {
      const usuariosDeLaDb = obtenerUsuariosDeLocalStorage();

      if (!usuariosDeLaDb || !Array.isArray(usuariosDeLaDb)) {
        throw new Error("No se pudo acceder a la base de datos local");
      }

      const usuario = usuariosDeLaDb.find(
        (usuarioLS) => usuarioLS.nombreUsuario === data.nombreUsuario
      );

      if (!usuario) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El usuario no existe en la base de datos",
        });
        return;
      }

      if (usuario.password !== data.password) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Contraseña incorrecta",
        });
        return;
      }

      const usuarioLogueado = {
        nombreUsuario: data.nombreUsuario,
        loginAt: new Date().toISOString(),
      };

      sessionStorage.setItem("usuario", JSON.stringify(usuarioLogueado));

      Swal.fire({
        title: "Usuario Logueado",
        icon: "success",
        draggable: true,
      });

      reset();
      // navegacion("/");
    } catch (error) {
      console.error("Error en el login:", error);
      Swal.fire({
        icon: "error",
        title: "Error inesperado",
        text: error.message || "Ocurrió un problema al iniciar sesión",
      });
    }
  }
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Nombre */}
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tu nombre"
            isInvalid={errors.nombreUsuario}
            {...register("nombreUsuario", {
              required: "El campo es obligatorio",
              pattern: {
                value: /^[\p{L}\p{M}\p{Nd}]+$/u,
                message:
                  "Solo se permiten letras y números, sin símbolos ni espacios",
              },
              minLength: {
                value: 4,
                message: "Debe ingresar al menos 4 caracteres",
              },
            })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.nombreUsuario?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            isInvalid={errors.password}
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: { value: 6, message: "Mínimo 6 caracteres" },
            })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            type="submit"
            style={{ background: "rgb(231, 108, 60)", border: "none" }}
          >
            Iniciar Secion
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormLogin;
