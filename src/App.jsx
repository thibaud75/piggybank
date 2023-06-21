import React, { useState } from "react";
import Table from "./components/Table";
import FormNewEntry from "./components/FormNewEntry";
import Total from "./components/Total";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([
    { id: uuidv4(), name: "Loto ticket", desc: "", price: 20 },
    { id: uuidv4(), name: "Beers", desc: "Party night \\o/", price: -15 },
    { id: uuidv4(), name: "Phone Bill", desc: "January", price: -29.99 },
  ]);

  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleSubmit = (formData) => {
    const newEntry = {
      id: uuidv4(),
      name: formData.name,
      desc: formData.description,
      price: +formData.price,
    };
    setEntries([...entries, newEntry]);
  };

  return (
    <>
      <div>
        <Table entries={entries} onDelete={handleDelete} />
        <Total entries={entries} />
      </div>
      <div>
        <FormNewEntry onSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default App;
