import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./checkboxterms.css";

const CheckboxTerms = () => {
  const navigate = useNavigate();

  return (
    <div id="checkbox">
      <span>
        Debes leer y aceptar los Términos y Condiciones para continuar.
      </span>
      <Button variant="light" size="sm" onClick={() => navigate("/terminos")}>
        Ver Términos
      </Button>
    </div>
  );
};

export default CheckboxTerms;
