import "../../../styles/header-styles/header.css";
import Logo from "../../../assets/main-assets/loading-logo-original.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from '../../../utils/context';
import { links } from "../../../utils/constants";
import CartButton from "./sub-components/CartButton";


const Header = () => {

    const { openMenu } = useGlobalContext();

    return (
        <>
        <div className="header-content">
            <div className="header-content">
                <a href={links[0].url}><img src={Logo} alt="WanWan" /></a>
                <div className="mid-header">
                    <h1>WAN WAN <span className="italic">CERAMICS</span></h1>
                    <p>A one liner outlining wan wan ceramics</p>
                </div>
            </div>
                    
        <div className="right-header">

                <button className="btn-toggle" onClick={openMenu}>
                    <RxHamburgerMenu/></button>
                            <CartButton/>
                            <a href="">Contact</a>     
                </div>
        </div>
        </>
    )}

export default Header;