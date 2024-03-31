import "./Forms.css";

function EditForm() {
  return (
    <div id="edit-form">
      <button id="edit-form__close-btn">&times;</button>
      <fieldset id="edit-form__fieldset">
        <legend id="edit-form__fieldset__legend">Your Item</legend>
        <form id="edit-form__form">
          <div className="edit-form__item">
            <label htmlFor="edit-form__item__name">Item Name</label>
            <input id="edit-form__item__name" type="text" required />
          </div>
          <div className="edit-form__item">
            <label htmlFor="edit-form__item__description">Item Description</label>
            <textarea id="edit-form__item__description" required></textarea>
          </div>
          <div className="edit-form__item">
            <label htmlFor="edit-form__item__image">Image Url</label>
            <input id="edit-form__item__image" type="text" required />
          </div>
          <div className="edit-form__item">
            <label htmlFor="edit-form__item__price">Price</label>
            <input id="edit-form__item__price" type="text" required />
          </div>
          <div className="edit-form__item">
            <label htmlFor="edit-form__item__condition">Condition</label>
            <select id="edit-form__item__condition">
              <option value="New">New</option>
              <option value="Like New">Like New</option>
              <option value="Used">Used</option>
              <option value="Damaged">Damaged</option>
            </select>
          </div>
          <input type="submit" value="Save" id="edit-form__save-btn" />
        </form>
        <div id="edit-form__error-box"></div>
      </fieldset>
    </div>
  );
}

export default EditForm;
