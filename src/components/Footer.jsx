import "./component-styles/Footer.css";

function Footer() {
    return (
        <div id="footer">
            <h3 id="footer__subtitle">Contact Us:</h3>
            <nav id="footer__nav">
                <div className="footer__nav__item">
                    <img className="icon" src="./src/components/assets/email.png" alt="Email Icon"/>
                    <a href="mailto:abdelrahman.s2003@icloud.com" target="_blank">Email</a>
                </div>
                <div className="footer__nav__item">
                    <img className="icon" src="./src/components/assets/telephone.png" alt="Phone Icon"/>
                    <a href="tel:631-485-7394" target="_blank">Call</a>
                </div>
                <div className="footer__nav__item">
                    <img className="icon" src="./src/components/assets/linkedin.png" alt="LinkedIn Icon"/>
                    <a href="https://www.linkedin.com/in/abdelsayedahmed/" target="_blank">LinkedIn</a>
                </div>
            </nav>
        </div>
    )
}

export default Footer;