import React from 'react';
import './menu.css';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../../../utils/context';

const Menu = () => {
  const { isMenuOpen, closeMenu } = useGlobalContext();

  const handleLinkClick = (e) => {
    closeMenu();
  };

  return (
    <aside className={`${isMenuOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <button className='close-btn' onClick={handleLinkClick}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
      <li><a href="#home" onClick={handleLinkClick}>home</a></li>
      <li><a href="#about" onClick={handleLinkClick}>gallery</a></li>
      <li><a href="#catalogue" onClick={handleLinkClick}>shop</a></li>
      </ul>
    </aside>
  );
};

export default Menu;
