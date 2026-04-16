
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">💰 Cashback App</h1>

        <div className="links">
          <NavLink to="/"
            className={ "link" }
          >
            Home
          </NavLink>

          <NavLink to="/"
            className={"link"}
          >
            Histórico
          </NavLink>
        </div>
      </div>
    </nav>
  );
}