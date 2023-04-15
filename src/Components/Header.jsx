import React from 'react';
import "../Styles/Header.css"

export const Header = () => {
  return (
    <header>
      <div className="logo">QuickNote</div>
      <nav>
        <ul className="menu">
          <li className="menu-item">
            <button className="menu-link" onClick={() => {}}>Home</button>
          </li>
          <li className="menu-item">
            <button className="menu-link" onClick={() => {}}>About</button>
          </li>
          <li className="menu-item">
            <button className="menu-link" onClick={() => {}}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
