import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./Error404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* el * significa “cualquier otra ruta” */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
