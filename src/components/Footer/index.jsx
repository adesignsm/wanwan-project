import React from "react";
import "./footer.css";


const Footer = () => {
    
    return (
        <>
            <div id = "footer-container">
                <div className="footer-box-container">
                    <div className="footer-column">
                        <div className="footer-newsletter">
                        <h1>WAN WAN CERAMICS</h1>
                        <h3>SIGN UP FOR OUR NEWSLETTER</h3>
                        <p>Sign up for first access to new product drops,
                        tips, and something about ceramics. 
                        Spam free email guaranteed</p>
                        <div>
                            <form>
                        <input
                        className="submit-input"
                        placeholder="EMAIL"/>
                        <button type="submit" className="submit-btn">SUBSCRIBE</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-links">
                            <div>
                        <ul>
                            <li><a href="#">INSTRAGRAM</a></li>
                            <li><a href="#">FACEBOOK</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">ACCESSIBILITY</a></li>
                        </ul>
                            </div>
                            <div>
                        <ul>
                            <li><a href="#">TERMS & CONDITIONS</a></li>
                            <li><a href="#">PRIVACY POLICY</a></li>
                            <li><a href="#">WHOLESALE</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;