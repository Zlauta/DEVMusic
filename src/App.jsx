import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import RegisterPage from "./pages/RegisterPage";
import Details from "./pages/Details";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registro" element={<RegisterPage></RegisterPage>} />
        <Route path="*" element={<Error404 />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
