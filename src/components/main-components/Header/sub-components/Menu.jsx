import React from 'react';
import '../../../../styles/menu-styles/menu.css';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../../../utils/context';
import { social, links } from '../../../../utils/constants';


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
        {links.map((link) => {
          const { id, url, text} = link;
          return (
            <li key={id}>
              <a href={url}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Menu;
