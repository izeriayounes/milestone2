import { useState } from "react";
import Link from "./Link";
import "./Navbar.css";
import { logout } from "../api/apiService";

function Navbar({ onClick, username, openLogin }) {
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const logoutFunction = () => {
    logout();
    setTimeout(() => (window.location.pathname = "/"), 1000);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary px-3">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">
            My Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {username && (
            <div className="navbar-nav ml-auto cursor-pointer">
              <span
                className="nav-link text-white username-text"
                onClick={toggleLogout}
              >
                Hello, {username}
              </span>
              {showLogout && (
                <>
                  <span
                    className="nav-link text-white logout-text"
                    onClick={logoutFunction}
                  >
                    Logout
                  </span>
                  <span className="nav-link text-white logout-text">
                    Orders
                  </span>
                </>
              )}
            </div>
          )}
          {!username && (
            <div className="navbar-nav ml-auto cursor-pointer">
              <span
                className="nav-link text-white username-text"
                onClick={openLogin}
              >
                Login
              </span>
            </div>
          )}
          <ul className="navbar-nav ml-auto cursor-pointer">
            <li className="nav-item">
              <i className="bi bi-bag text-white" onClick={onClick}></i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
