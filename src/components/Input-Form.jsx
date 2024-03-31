import "./component-styles/Forms.css";

function InputForm() {
  return (
    <div id="input-form">
      <a id="input-form__close-btn" onClick={() => document.getElementById("input-form").style.width = 0}>&times;</a>
      <fieldset id="input-form__fieldset">
        <legend id="input-form__fieldset__legend"><span>Your Item</span></legend>
        <form id="input-form__form">
          <div className="input-form__item">
            <label htmlFor="input-form__item__name"><span>Item Name</span></label>
            <input id="input-form__item__name" type="text" required/>
          </div>
          <div className="input-form__item">
            <label htmlFor="input-form__item__description"><span>Item Description</span></label>
            <textarea id="input-form__item__description" required></textarea>
          </div>
          <div className="input-form__item">
            <label htmlFor="input-form__item__image"><span>Image Url</span></label>
            <input id="input-form__item__image" type="text" required/>
          </div>
          <div className="input-form__item">
            <label htmlFor="input-form__item__price"><span>Price</span></label>
            <input id="input-form__item__price" type="text" required/>
          </div>
          <div className="input-form__item">
            <label htmlFor="input-form__item__condition"><span>Condition</span></label>
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
