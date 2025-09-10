import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import MusicsTable from "../components/admin/MusicsTable";

const AdminPage = () => {
  return (
    <>
      <div style={{ background: "white" }}>
        <MusicsTable></MusicsTable>
      </div>
    </>
  );
};

export default AdminPage;
