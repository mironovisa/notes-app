import React from "react";

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">My App</div>
        <div className="navbar-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div
          className="navbar-toggle"
          onClick={() =>
            document
              .querySelector(".navbar-menu")
              .classList.toggle("active")
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};
