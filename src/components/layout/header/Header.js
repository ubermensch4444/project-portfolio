import React from 'react';
import HamburgerMenu from '../../common/hamburger_menu/HamburgerMenu';
import './Header.css';

function Header({ onSelectMenuItem, currentPage }) {
  return (
    <header className="header">
      <div className="logo"></div>
      <HamburgerMenu onSelectMenuItem={onSelectMenuItem} currentPage={currentPage} />
    </header>
  );
}

export default Header;
