import LogoBlack from '../../assets/LOGO_bLACK.svg'
import './Footer.css'; // Import your CSS file for styling
function Footer() {

    return (
        <footer className="footer">
            <img src={LogoBlack} alt="Kasa Log Black" className="logo-black" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>);
}

export default Footer;