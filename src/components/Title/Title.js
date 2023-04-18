import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>SFPOPOS</h1>
        <p className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</p>

        <nav className='navbar-parent'>
          <ul className='navbar-parent-ul'>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
                to="/"
              >
                List
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Title;

