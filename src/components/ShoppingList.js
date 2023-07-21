import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [categoryDecided, setCategoryDecided]= useState('All')

  const handleCategory=(e)=>{
    setCategoryDecided(e.target.value)
  }

  const showItems = items.filter((item)=>{
    if(categoryDecided === "All")
    return true

    return item.category === categoryDecided
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {showItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;