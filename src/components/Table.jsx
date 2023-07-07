import React from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import "./Table.css";

export const Table = ({ rows, handleDeleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Page</th>
            <th className="expand">Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, ind) => {

            const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1)

            return (
              <tr key={ind}>
                <td>{row.page}</td>
                <td className="expand">{row.description}</td>
                <td className={`label label-${row.status}`}>{statusText}</td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill className="delete-btn" onClick={() => handleDeleteRow(ind)} />
                    <BsFillPencilFill onClick={() => editRow(ind)} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
