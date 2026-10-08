import { NavLink } from "react-router";
import "../App.css";

function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar navbar-expand-md site-navbar">
          <NavLink to="/" end className="navbar-brand site-brand">
            <span className="brand-icon">
              <i className="fa-solid fa-book"></i>
            </span>
            bookstore
          </NavLink>

          <div className="navbar-nav ms-auto flex-row gap-1 gap-md-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link custom-nav-link ${isActive ? "active" : ""}`
              }
            >
              <i className="fa-solid fa-house me-1"></i> Home
            </NavLink>

            <NavLink
              to="/team"
              className={({ isActive }) =>
                `nav-link custom-nav-link ${isActive ? "active" : ""}`
              }
            >
              <i className="fa-solid fa-users me-1"></i> Team
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link custom-nav-link ${isActive ? "active" : ""}`
              }
            >
              <i className="fa-solid fa-envelope me-1"></i> Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;