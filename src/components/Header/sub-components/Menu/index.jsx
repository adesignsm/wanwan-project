import React from 'react';
import './menu.css';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../../../utils/context';
import $ from "jquery";

const Menu = () => {
  const { isMenuOpen, closeMenu } = useGlobalContext();

  const handleMenuClick = () => {
    closeMenu();
    // const headerContent = document.querySelector(".header-content");
    // $(headerContent).animate({marginTop: "0vh" }, 300);

};

  return (
    <aside className={`${isMenuOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <button className='close-btn' onClick={handleMenuClick}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
      <li><a href="#home" onClick={handleMenuClick}>home</a></li>
      <li><a href="#about" onClick={handleMenuClick}>gallery</a></li>
      <li><a href="#catalogue" onClick={handleMenuClick}>shop</a></li>
      </ul>
    </aside>
  );
};

export default Menu;
