import React from "react";
import "./component-styles/Main.css";
import { data } from "./data.js";

function formatPrice(price) {
  const parsedPrice = typeof price === "string" ? parseFloat(price) : price;
  return parsedPrice.toFixed(2);
}

function Main() {
  return (
    <div id="main">
      {data.map((item) => (
        <div key={item.id} className="item">
          <img
            className="item__image"
            src={item.imageUrl}
            alt={`image of ${item.itemName}`}
          />
          <div className="item__card">
            <h2 className="item__card__name">{item.itemName}</h2>
            <p className="item__card__description">
              Description: {item.itemDescription}
            </p>
            <p className="item__card__condition">Condition: {item.condition}</p>
            <p className="item__card__price">Price: ${formatPrice(item.price)}</p>
            <nav className="item__card__btn-nav">
              <button className="edit btn">Edit</button>
              <button className="del btn" onClick={() => document.getElementById("popup").style.width = "100%"}>Remove</button>
            </nav>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
