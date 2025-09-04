import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import RegisterPage from "./pages/RegisterPage";
import Terminos from "./pages/TermYCondi";
import ContactMailto from "./pages/Contactanos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* el * significa “cualquier otra ruta” */}
        <Route path="/contacto" element={<ContactMailto />} />
        <Route path="/registro" element={<RegisterPage></RegisterPage>} />
        <Route path="*" element={<Error404 />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>
    </BrowserRouter>
  );
}
