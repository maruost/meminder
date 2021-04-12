import React from "react";
import { useHistory, Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { Person, Forum, ArrowBackIos } from "@material-ui/icons";
import "./header.css";
import logo from "../../static/images/logo_meminder.png";

function Header({ backButton, ...props }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <Link to={backButton}>
          <IconButton>
            <ArrowBackIos />
          </IconButton>
        </Link>
      ) : (
        <Link to={backButton}>
          <IconButton>
            <Person />
          </IconButton>
        </Link>
      )}
      <img className="header__icon" src={logo} alt="meminder icon" />
      <Link to="/chats">
        <IconButton>
          <Forum />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
