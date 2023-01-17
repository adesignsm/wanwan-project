import React from 'react';
import '../../../../styles/menu-styles/menu.css';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../../../utils/context';

const Menu = () => {
  const { isMenuOpen, closeMenu } = useGlobalContext();

  return (
    <aside className={`${isMenuOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <button className='close-btn' onClick={closeMenu}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        <li> home </li>
        <li> about </li>
        <li> gallery </li>
        <li> shop </li>
      </ul>
    </aside>
  );
};

export default Menu;
