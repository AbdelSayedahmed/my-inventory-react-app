import "./component-styles/Popup.css";

function Popup() {
  return (
    <div id="popup">
      <div id="popup__bin">
        <p id="popup__text">Are your sure you want to remove?</p>
        <button id="popup__cancel-btn" onClick={() => document.getElementById("popup").style.width = "0%"}>Cancel</button>
        <button id="popup__remove-btn">Remove</button>
      </div>
    </div>
  );
}

export default Popup;