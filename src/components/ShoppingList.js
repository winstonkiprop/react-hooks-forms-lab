import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // const itemsToDisplay = items
  //   // category
  //   .filter(
  //     (item) => selectedCategory === "All" || item.category === selectedCategory
  //   )
  //   // search term
  //   .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const itemsToDisplay = items
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )

    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // const itemsToDisplay = items
  // .filter((item) => {
  //   if (selectedCategory === "All") return true;

  //   return item.category === selectedCategory;

  // })
  // .filter(item)=> item.name.includes(searchTerm)

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
