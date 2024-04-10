import React, { useState } from "react";
import "./component-styles/Forms.css";
import uuid from "react-uuid";

export function InputForm({ addFormData }) {
  const initialFormData = {
    id: uuid(),
    itemName: "",
    itemDescription: "",
    imageUrl: "",
    price: "",
    condition: "New",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("input-form").style.width = 0;
    addFormData(formData);
    setFormData(initialFormData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <div id="input-form">
      <a
        id="input-form__close-btn"
        onClick={() => (document.getElementById("input-form").style.width = 0)}
      >
        &times;
      </a>
      <fieldset id="input-form__fieldset">
        <legend id="input-form__fieldset__legend">
          <span>Your Item</span>
        </legend>
        <form id="input-form__form" onSubmit={handleSubmit}>
          <div className="input-form__item">
            <label htmlFor="input-form__item__name">
              <span>Item Name</span>
            </label>
            <input
              id="input-form__item__name"
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-form__item">
            <label htmlFor="input-form__item__description">
              <span>Item Description</span>
            </label>
            <textarea
              id="input-form__item__description"
              name="itemDescription"
              value={formData.itemDescription}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="input-form__item">
            <label htmlFor="input-form__item__image">
              <span>Image Url</span>
            </label>
            <input
              id="input-form__item__image"
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-form__item">
            <label htmlFor="input-form__item__price">
              <span>Price</span>
            </label>
            <input
              id="input-form__item__price"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-form__item">
            <label htmlFor="input-form__item__condition">
              <span>Condition</span>
            </label>
            <select
              id="input-form__item__condition"
              name="condition"
              value={formData.condition}
              onChange={handleInputChange}
            >
              <option value="New">New</option>
              <option value="Like New">Like New</option>
              <option value="Used">Used</option>
              <option value="Damaged">Damaged</option>
            </select>
          </div>
          <input
            type="reset"
            value="Reset"
            id="input-form__reset-btn"
            onClick={handleReset}
          />
          <input type="submit" value="Upload" id="input-form__upload-btn" />
        </form>
        <div id="input-form__error-box"></div>
      </fieldset>
    </div>
  );
}
