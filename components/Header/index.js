import { Link } from "react-router-dom";

import "./index.css";

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <h1 className="title">Gowtham</h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/project">
          Project
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contacts">
          Contacts
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
