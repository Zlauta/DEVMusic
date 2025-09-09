import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // mejor en .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("✅ Mensaje enviado con éxito");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setStatus("❌ Error al enviar el mensaje");
      });
  };

  return (
    <div
      className="flex flex-col min-h-screen min-vh-100 "
      style={{
        backgroundColor: "#F8953E",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/connected.png")',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className=" font-bold text-center mb-4 text-white">Contacto</h1>

      <form
        onSubmit={handleSubmit}
        className="shadow-lg d-flex rounded-2xl m-4 p-5 w-full max-w-md border border-gray-300 bg-white bg-opacity-10 flex-column align-items-center"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
      >
        {/* Input de Nombre */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
          className=" rounded w-full p-3 border rounded-xl mb-4 bg-white bg-opacity-90 w-50"
        />

        {/* Input de Email */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Tu correo electrónico"
          required
          className=" rounded p-3 border rounded-xl mb-4 bg-white bg-opacity-90 w-50"
        />

        {/* Input de Mensaje */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí..."
          required
          className=" rounded p-3 border rounded-xl mb-4 resize-none bg-white bg-opacity-90 border-1-gray-300 w-75 h-75 "
        />

        {/* Botón */}
        <button
          type="submit"
          className=" btn btn-primary w-full bg-blue-600 text-white mb-3 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Enviar
        </button>
        <Link
          to="/"
          className="btn mb-3"
          style={{
            backgroundColor: "#E76C3C",
            border: "2px solid rgba(56, 59, 63, 0.62)",
            color: "white",
          }}
        >
          Volver al inicio
        </Link>

        {/* Mensaje de estado */}
        {status && (
          <p
            className={` bg-white mt-4 text-center p-2 rounded-xl font-semibold rounded ${
              status.includes("✅")
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
