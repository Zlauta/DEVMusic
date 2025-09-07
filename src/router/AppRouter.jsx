import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutComNavbar from '../layout/LayoutComNavbar'
import AdminPage from '../pages/AdminPage'
import RegisterPage from '../pages/RegisterPage'
import Error404 from '../Error404'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<LayoutComNavbar></LayoutComNavbar>}>
        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
        </Route>
        {/* el * significa “cualquier otra ruta” */}
        <Route path="/registro" element={<RegisterPage></RegisterPage>} />

       
        <Route path="*" element={<Error404/>} />
      </Routes>
    </div>
  )
}

export default AppRouter
