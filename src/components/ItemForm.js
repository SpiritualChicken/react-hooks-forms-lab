import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

const[addItem, setAddItem] = useState("");
const [category, setCategory] = useState("Produce"); 

 function handleSubmit(event) {
  event.preventDefault();
  const newItem = {
    id: uuid(), 
    name: addItem,
    category: category,
  }
  onItemFormSubmit(newItem);
  setAddItem("");
  setCategory("Produce");
  }

  function onNameChange(event) {
    setAddItem(event.target.value)
  };

  function onCategoryChange(event){
    setCategory(event.target.value)
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={onCategoryChange}>
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
