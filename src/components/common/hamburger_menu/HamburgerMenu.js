import React, { useState, useEffect } from 'react';
import './HamburgerMenu.css';

function HamburgerMenu({ onSelectMenuItem, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300); // 애니메이션 시간과 동일하게 설정
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    onSelectMenuItem(menuItem);
    setIsOpen(false);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {(isOpen || isAnimating) && (
        <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      )}
      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>
          <span className="xmark"></span>
        </button>
        <ul className="menu-items">
          <li 
            onClick={() => handleMenuItemClick('Home')}
            className={currentPage === 'Home' ? 'active' : ''}
          >
            HOME
          </li>
          <li 
            onClick={() => handleMenuItemClick('About')}
            className={currentPage === 'About' ? 'active' : ''}
          >
            ABOUT
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
