import { Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2/dist/sweetalert2.js";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nombreUsuario: "",
      email: "",
      password: "",
      confirmPassword: "",
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

  function guardarEnLocalStorage(usuarios) {
    try {
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  function onSubmit(data) {
    try {
      if (data.password != data.confirmPassword) {
        Swal.fire({
          title: "sus contraseñas no coinciden",
          icon: "warning",
        });
        return;
      }
      const nuevoUsuario = {
        id: Date.now(),
        nombreUsuario: data.nombreUsuario,
        email: data.email,
        password: data.password,
        createdAt: new Date().toISOString(),
      };
      const usuariosDelLocalStorage = obtenerUsuariosDeLocalStorage();

      const existeUsuario = usuariosDelLocalStorage.some(
        (usuarios) => usuarios.email === nuevoUsuario.email
      );

      if (existeUsuario) {
        Swal.fire({
          icon: "error",
          title: "Usuario existente",
          text: "Intente con otro Email",
        });
        return;
      }

      guardarEnLocalStorage([...usuariosDelLocalStorage, nuevoUsuario]);
      reset();
      Swal.fire({
        title: "Cuenta creada",
        text: "el registro se envió",
        icon: "success",
      });
      // navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error al registrar usuario",
        icon: "error",
      });
      console.error(error);
    }
  }
  // const navigate = useNavigate();

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

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="ejemplo@mail.com"
            isInvalid={errors.email}
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "El email no es válido",
              },
            })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
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

        {/* Confirm Password */}
        <Form.Group className="mb-4">
          <Form.Label>Confirmar contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            isInvalid={errors.confirmPassword}
            {...register("confirmPassword", {
              required: "Confirma tu contraseña",
            })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            type="submit"
            style={{ background: "rgb(231, 108, 60)", border: "none" }}
          >
            Crear Cuenta
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormRegister;
