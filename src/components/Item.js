import React, {useState} from "react";

function Item({ name, category }) {
  let [inCart, setInCart] = useState(false);
  function handleOnClick() {
    setInCart((inCart) => !inCart)
 }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleOnClick}>{inCart ? "Remove From" : "Add To"}Add to Cart</button>
    </li>
  );
}

export default Item;