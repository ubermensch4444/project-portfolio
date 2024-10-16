import React from 'react';
import HamburgerMenu from '../../common/hamburger_menu/HamburgerMenu';
import './Header.css';

function Header({ onSelectMenuItem, currentPage }) {
  return (
    <header className="header">
      <div className="logo">
        {/* 로고 이미지 대신 텍스트나 아이콘을 넣을 수 있습니다 */}
        {/* 예: <span>Logo</span> */}
      </div>
      <HamburgerMenu onSelectMenuItem={onSelectMenuItem} currentPage={currentPage} />
    </header>
  );
}

export default Header;
