import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(event){
    setSearchValue(event.target.value)
  }


  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }
    if (searchValue !== "Search..." && !item.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return false;
    }
    return true;
  });


  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={searchValue} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
