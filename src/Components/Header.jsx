import React from 'react';
import "../Styles/Header.css"

export const Header = () => {
  return (
    <header>
      <div className="logo">QuickNote</div>
      <nav>
        <ul className="menu">
          <li className="menu-item">
            <a href="#" className="menu-link">Home</a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">About</a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
