import React from "react";
import Header from "../components/Header/";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const LayoutComNavbar = () => {
  return (
    <div>
      <Header></Header>
      <main style={{ background: "rgb(14, 2, 15)" }} className="alturaMinima ">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default LayoutComNavbar;
