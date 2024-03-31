import "./Header.css";

function Header() {
  return (
    <div id="header">
      <h1 id="header__title">The Thrift Store</h1>
      <nav id="header__nav">
        <div className="header__nav__item">Home</div>
        <div className="header__nav__item">About Us</div>
        <div className="header__nav__item">Contact Us</div>
        <div className="header__nav__item">Upload Your Item</div>
      </nav>
    </div>
  );
}

export default Header;