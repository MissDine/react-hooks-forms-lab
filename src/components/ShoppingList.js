import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onSubmitItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

    function handleSearchChange(e){
      setSearchText(e)

    }
  const itemsToDisplay = items
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter(item=>item.name.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onSubmitItem}/>
      <Filter onCategoryChange={handleCategoryChange} searchText={searchText} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
