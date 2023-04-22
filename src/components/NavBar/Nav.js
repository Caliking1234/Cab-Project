import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
function Nav() {
  return (
    <div className="nav">
      <div>
        <span>
          <h1 className="nav-heading">TERMINAL</h1>
        </span>
      </div>
      <ul className="nav-ul" style={{ display: "flex" }}>
        <input type="checkbox" id="check" />

        <div className="flex-nav">
          <li>
            <Link to={"/Cab-Project"}>Home</Link>
          </li>
          <li>
            <Link to={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contacts</Link>
          </li>
          <li>
            <Link to={"/login"}>LogIn</Link>
          </li>
        </div>
        <label
          for="check"
          className="hamBgr"
          style={{
            color: "white",
            float: "right",
            marginLeft: "auto",
            paddingRight: 20,
          }}
        >
          <i>
            <MenuIcon fontSize="large" />
          </i>
        </label>
      </ul>
    </div>
  );
}

export default Nav;
