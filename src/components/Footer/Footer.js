import React from 'react';
import logo from "../../images/logo.png"

const Footer = () => {
    return (
        <div style={{ backgroundColor: "black", height: "1fr" }}>
            <div style={{ display: "flex", marginTop: "5%" }}>
                <div style={{ marginLeft: "10%", marginTop: "10%" }}>
                    <img src={logo} alt="" width="50%" />
                </div>
                <div style={{ color: "white", padding: "10vh 5vw 0 0", width: "40%", marginLeft: "10%" }}>
                    <p>About Us</p>
                    <p>Contact us</p>
                    <p>FAQ</p>
                    <p>Get help</p>
                </div>
            </div>
            <p style={{ color: "white", padding: "5%", marginBottom: "0" }}><small>Copyright© All Right Reserved By Mashry</small></p>
        </div>

    );
};

export default Footer;