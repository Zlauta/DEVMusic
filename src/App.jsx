
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import RegisterPage from "./pages/RegisterPage";
import Terminos from "./pages/TermYCondi";
import ContactMailto from "./pages/Contactanos";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    
      <Routes>
        {/* el * significa “cualquier otra ruta” */}
        <Route path="/contacto" element={<ContactMailto />} />
        <Route path="/registro" element={<RegisterPage></RegisterPage>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
  

  );
};
//export default App;
