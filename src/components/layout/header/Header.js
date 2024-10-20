import React from 'react';
import HamburgerMenu from '../../common/hamburger_menu/HamburgerMenu';
import './Header.css';
import logo from '../../../assets/images/logo/logo.png'

function Header({ onSelectMenuItem, currentPage }) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <HamburgerMenu onSelectMenuItem={onSelectMenuItem} currentPage={currentPage} />
    </header>
  );
}

export default Header;
