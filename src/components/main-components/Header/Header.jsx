import React, { useState } from "react";
import "../../../styles/header-styles/header.css";
import Logo from "../../../assets/main-assets/loading-logo-original.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from '../../../utils/context';
import { NavLink } from "react-router-dom";

import $ from "jquery";

const Header = () => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const { openMenu } = useGlobalContext();

    const handleCartLink = () => {
        $("#cart-page").delay(100).animate({top: "50vh"}, 1000);
    }

    return (
        <>
            <div className="header-content">
                <div className="header-content">
                    <a href=""><img src={Logo} alt="WanWan" /></a>
                    <div className="mid-header">
                        <h1>WAN WAN <span className="italic">CERAMICS</span></h1>
                        <p>A one liner outlining wan wan ceramics</p>
                    </div>
                </div>
                        
                <div className="right-header">
                    <button className="btn-toggle" onClick={openMenu}><RxHamburgerMenu/></button>
                    <nav role="navigation" aria-label="aria-label">
                        <div className="navigation-container">
                            <p onClick={handleCartLink}>Cart</p>
                            <p>Contact</p>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )}

export default Header;