import "./Popup.css"

function Popup() {
    return (
        <div id="popup" className="overlay">
            <p id="popup__text">Are your sure you want to remove?</p>
            <button id="popup__cancel-btn">Cancel</button>
            <button id="popup__remove-btn">Remove</button>
        </div>
    )
}

export default Popup;