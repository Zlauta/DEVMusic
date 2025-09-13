import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { loginUsuario } from "../../service/userService";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  function onSubmit(data) {
    const resultado = loginUsuario(
      data.email,
      data.password,
      data.nombreUsuario
    );

    if (!resultado.exito) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: resultado.mensaje,
        showConfirmButton: false,
        timer: 2500,
        position: "center",
      });
      return;
    }

    Swal.fire({
      position: "center",
      title: "Bienvenido a DEVMusic",
      text: resultado.mensaje,
      icon: "success",
      showConfirmButton: false,
      timer: 2500,
    });

    reset();
    navigate("/");
  }
  return (
    <div>
      <Form className="px-5" onSubmit={handleSubmit(onSubmit)}>
        {/* Nombre */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Tu Email"
            isInvalid={errors.email}
            {...register("email", {
              required: "El campo es obligatorio",
              minLength: {
                value: 4,
                message: "4 Caracteres minimos ",
              },
              maxLength: {
                value: 30,
                message: "Maximo caracteres aceptados es 30",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                message: "El email no es válido",
              },
            })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
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
              minLength: {
                value: 4,
                message: "4 Caracteres minimos ",
              },
              maxLength: {
                value: 20,
                message: "Maximo caracteres aceptados es 20",
              },
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
