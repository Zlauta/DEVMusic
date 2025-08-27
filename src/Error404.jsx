import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <main className="min-h-screen grid place-items-center relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-200 via-white to-pink-200" />

      <section className="text-center max-w-md p-6">
        <h1 className="text-7xl font-extrabold tracking-tight text-gray-800">
          404
        </h1>
        <p className="mt-3 text-xl text-gray-700">Página no encontrada</p>
        <p className="mt-1 text-sm text-gray-500">
          La ruta que abriste no existe o fue movida.
        </p>
        <Link
          className="mt-8 inline-block rounded-2xl border px-5 py-3 text-base font-medium shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          to="/"
        ></Link>
        Volver al inicio
        <div className="mt-8 text-xs text-gray-400"></div>
      </section>
    </main>
  );
};

export default Error404;
