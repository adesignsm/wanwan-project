import React from "react";
import "./header.css";
import Logo from "../../assets/main-assets/loading-logo-original.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from '../../utils/context';

import $ from "jquery";

const Header = () => {
    const { openMenu } = useGlobalContext();

    let prevScrollPos = window.pageYOffset;

    if (window.innerWidth >= 690) {
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;

            if (prevScrollPos < currentScrollPos) {
                $(".header-content").stop().animate({marginTop: "-25vh"}, 300);
            } else {
                $(".header-content").stop().animate({marginTop: "0vh"}, 300);
            }

            prevScrollPos = currentScrollPos;
        }
    }

    if (window.innerWidth <= 690) {
        window.ontouchmove = () => {
            let currentScrollPos = window.pageYOffset;
    
            if (prevScrollPos < currentScrollPos) {
                $(".header-content").stop().animate({marginTop: "-15vh"}, 300);
            } else {
                $(".header-content").stop().animate({marginTop: "0vh"}, 300);
            }
    
            prevScrollPos = currentScrollPos;
        }
    }

    return (
        <>
            <div className="header-content">
                <div className="header-content">
                    <div className="header-left-container">
                        <a href=""><img src={Logo} alt="WanWan" /></a>
                    </div>
                    <div className="mid-header">
                        <h1>WAN WAN <span className="italic">CERAMICS</span></h1>
                        <p>A one liner outlining wan wan ceramics</p>
                    </div>
                    <div className="right-header">
                        <button className="btn-toggle" onClick={openMenu}><RxHamburgerMenu/></button>
                    </div>
                </div>
            </div>
        </>
    )}

export default Header;