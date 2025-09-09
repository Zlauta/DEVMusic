import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutComNavbar from "../layout/LayoutComNavbar";
import AdminPage from "../pages/AdminPage";
import RegisterPage from "../pages/RegisterPage";
import Error404 from "../pages/Error404";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Contactanos from "../pages/Contactanos";
import ProtectedRouter from "./ProtectedRouter";
import SearchPage from "../pages/SearchPage";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<LayoutComNavbar></LayoutComNavbar>}>
          <Route path="/search" element={<SearchPage></SearchPage>}></Route>
          <Route element={<ProtectedRouter></ProtectedRouter>}>
            <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
          </Route>
          <Route path="/contacto" element={<Contactanos></Contactanos>}></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
        {/* el * significa “cualquier otra ruta” */}
        <Route path="/registro" element={<RegisterPage></RegisterPage>} />
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
