import React from "react";
import { IconButton } from "@material-ui/core";
import { Person, Forum } from "@material-ui/icons";
import "./header.css";
import logo from "../../static/images/logo_meminder.png"

function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person />
      </IconButton>
      <img className="header__icon" src={logo} alt="meminder icon" />
      <IconButton>
        <Forum />
      </IconButton>
    </div>
  );
}

export default Header;
