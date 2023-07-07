import React, { useState } from "react";
import "./App.css";
import { Table } from "./components/Table";
import Modal from "./components/Modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    { page: "Page 1", description: "This is the first page", status: "live" },
    { page: "Page 2", description: "This is the second page", status: "draft" },
    { page: "Page 3", description: "This is the third page", status: "error" },
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleEditRow = (ind) => {
    setRowToEdit(ind);
    setModalOpen(true);
  };

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, ind) => ind !== targetIndex));
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null //adding a new row, not editing
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, ind) => {
            if (ind !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };

  return (
    <div className="app">
      <Table
        rows={rows}
        handleDeleteRow={handleDeleteRow}
        editRow={handleEditRow}
      />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          onSubmit={handleSubmit}
          closeModal={() => {
            setModalOpen(false)
            setRowToEdit(null)
            }}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
};

export default App;
