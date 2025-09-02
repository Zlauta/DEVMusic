import { Routes, Route } from "react-router-dom";
import Error404 from "./Error404";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";
import "sweetalert2/dist/sweetalert2.min.css";
import LoginPage from "./pages/LoginPage";
const App = () => {
  return (
    <Routes>
      {/* el * significa “cualquier otra ruta” */}
      <Route path="/registro" element={<RegisterPage></RegisterPage>} />
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
export default App;
