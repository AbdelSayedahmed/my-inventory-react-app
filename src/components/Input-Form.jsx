import "./Input-Form.css";

function InputForm() {
  return (
    <div id="input-form" className="overlay">
      <button id="input-form__close-btn">&times;</button>
      <fieldset id="input-form__fieldset">
        <legend id="input-form__fieldset__legend">Your Item</legend>
        <form id="input-form__form">
          <div className="input-form__item">
            <label htmlFor="input-form__item__name">Item Name</label>
            <input id="input-form__item__name" type="text" required/>
          </div>
          <div className="input-form__item">
            <label htmlFor="input-form__item__description">Item Description</label>
            <textarea id="input-form__item__description" required></textarea>
          </div>
          <div className="input-form__item">
            <label htmlFor="input-form__item__image">Image Url</label>
            <input id="input-form__item__image" type="text" required/>
          </div>
          <div className="input-form__item">
            <label htmlFor="input-form__item__price">Price</label>
            <input id="input-form__item__price" type="text" required/>
          </div>
          <div className="input-form__item">
            <label htmlFor="input-form__item__condition">Condition</label>
            <select id="input-form__item__condition">
              <option value="New">New</option>
              <option value="Like New">Like New</option>
              <option value="Used">Used</option>
              <option value="Damaged">Damaged</option>
            </select>
          </div>
          <input type="reset" value="Reset" id="input-form__reset-btn" />
          <input type="submit" value="Upload" id="input-form__upload-btn" />
        </form>
        <div id="input-form__error-box"></div>
      </fieldset>
    </div>
  );
}

export default InputForm;
