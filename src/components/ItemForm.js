

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // console.log(props)
  const [formData, setFormData] = useState({
    // id:uuid(),
    name: "Berries",
    category: "Produce",
  });

  function handleChange(event) {
    let name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      ...formData,
    });
  }
  // console.log(formData)
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;