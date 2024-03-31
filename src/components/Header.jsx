import "./component-styles/Header.css";

function Header() {
  return (
    <div id="header">
      <h1 id="header__title">The Thrift Store</h1>
      <nav id="header__nav">
        <div className="header__nav__item">Home</div>
        <div className="header__nav__item">About Us</div>
        <div className="header__nav__item" onClick={() => document.body.scrollIntoView(false)}>Contact Us</div>
        <div className="header__nav__item" onClick={() => document.getElementById("input-form").style.width = "100%"}>Upload Your Item</div>
      </nav>
    </div>
  );
}

export default Header;