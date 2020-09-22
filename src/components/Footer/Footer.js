import React from 'react';
import logo from "../../images/logo.png"

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerUpper">
                <div className="footerLogo">
                    <img src={logo} alt="" width="50%" />
                </div>
                <div className="contact">
                    <p>About Us</p>
                    <p>Contact us</p>
                    <p>FAQ</p>
                    <p>Get help</p>
                </div>
            </div>

            <p className="copyright"><small>Copyright© All Right Reserved By Mashry</small></p>
        </div>

    );
};

export default Footer;