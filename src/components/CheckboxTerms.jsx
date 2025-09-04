import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CheckboxTerms = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      left: "50%",
      transform: "translateX(-50%)",
      background: "#333",
      color: "#fff",
      padding: "12px 24px",
      borderRadius: 8,
      boxShadow: "0px 2px 8px rgba(0,0,0,0.3)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      gap: 12,
    }}>
      <span>Debes leer y aceptar los Términos y Condiciones para continuar.</span>
      <Button variant="light" size="sm" onClick={() => navigate("/terminos")}>
        Ver Términos
      </Button>
    </div>
  );
};

export default CheckboxTerms;