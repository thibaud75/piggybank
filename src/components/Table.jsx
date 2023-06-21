import React from "react";

function Table({ entries, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.name}</td>
            <td>{entry.desc}</td>
            <td>{entry.price}</td>
            <td>
              <button onClick={() => onDelete(entry.id)}>X</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
