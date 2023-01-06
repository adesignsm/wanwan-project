import "../../../styles/header-styles/header.css";
import Logo from "../../../assets/main-assets/loading-logo-original.svg"
import Menu from "./sub-components/Menu";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {

    return (
        <>
            <div className="header-content">
                <img src={Logo} alt="WanWan"/>
                <group>
                    <h1>WAN WAN <span className="italic">CERAMICS</span></h1>
                    <p>A one liner outlining wan wan ceramics</p>
                </group>
                
                <RxHamburgerMenu/>

                <div id = "header-container">
                    <Menu />
                </div>
            </div>
        </>
    )
}

export default Header;