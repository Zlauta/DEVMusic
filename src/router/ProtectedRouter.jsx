import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ADMIN_EMAIL } from "../components/Header";

const ProtectedRouter = () => {
  const usuarioLogueado = JSON.parse(
    sessionStorage.getItem("usuarios") || null
  );

  if (usuarioLogueado.email === ADMIN_EMAIL) {
    return <Outlet></Outlet>;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default ProtectedRouter;
