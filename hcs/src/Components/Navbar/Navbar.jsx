import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul className="navbar-items flexbox-col">
        {/* Navbar Items */}
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left">
            <div className="navbar-item-inner-icon-wrapper flexbox">
            </div>
            <span className="text"></span>
          </a>
        </li>
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left">
            <div className="navbar-item-inner-icon-wrapper flexbox">
            </div>
            <span className="text"></span>
          </a>
        </li>
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left" href='/'>
            <div className="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <span className="link-text">Home</span>
          </a>
        </li>
        <li className="navbar-item flexbox-left">
          <a className="navbar-item-inner flexbox-left" href='/sign-up'>
            <div className="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="person-outline"></ion-icon>
            </div>
            <span className="link-text">Join Now!</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;