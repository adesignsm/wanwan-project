import React, { useEffect } from 'react';
import './menu.css';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../../../utils/context';
import $ from "jquery";

const Menu = () => {
  const { isMenuOpen, closeMenu } = useGlobalContext();

  const handleMenuClick = () => {
    closeMenu();
};

  const handleMouseUp = (event) => {

    if (!event.target.closest('.sidebar')) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);



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
