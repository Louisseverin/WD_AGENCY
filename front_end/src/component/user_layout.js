/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const UserLayout = ({ children }) => {
  return (
    <div className="user-dashboard all-inf">
      <div className="sidebar">
        <div className="user_nav_logo">
          <img
            src="https://wd-graphics.com/wp-content/uploads/2023/03/wd-graphics-logo-white.png"
            class="user_nav_logo"
          />
        </div>
        <ul className="nav-list main-nav">
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Messages">Messages</Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <header className="header">
          <h1>Welcome, User</h1>
          <button className="logout-button">Logout</button>
        </header>
        {children}
      </div>
    </div>
  );
};
export default UserLayout;
