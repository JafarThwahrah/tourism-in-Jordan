import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
function Header() {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="React.com">
            <img
              src="../logo192.png"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            React
          </a>
          <NavLink to="/" className="navLink">
            Home
          </NavLink>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
