import React from "react";
import { useHistory, Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { Person, Forum, ArrowBackIos } from "@material-ui/icons";
import "./header.css";
import logo from "../../static/images/logo_meminder.png";

function Header({ backButton, loggedIn, ...props }) {
  const history = useHistory();

  const renderStartHeader = () => {
    return (
      <header className="header">
        <Link to="/" className="header__logo-name">
          Meminder
        </Link>
        <Link to="/">
          <img className="header__icon" src={logo} alt="meminder icon" />
        </Link>
        <div className="header__auth-box">
          <Link to="/signin" className="header__link">
            Вход
          </Link>
          <Link to="/auth" className="header__link">
            Регистрация
          </Link>
        </div>
      </header>
    );
  };

  const renderHeaderWithBackButton = () => {
    return (
      <header className="header">
        <Link to={backButton}>
          <IconButton>
            <ArrowBackIos />
          </IconButton>
        </Link>
        <Link to="/">
          <img className="header__icon" src={logo} alt="meminder icon" />
        </Link>
        <Link to="/chats">
          <IconButton>
            <Forum />
          </IconButton>
        </Link>
      </header>
    );
  };

  const renderHeader = () => {
    return (
      <header className="header">
        <Link to={"/profile"}>
          <IconButton>
            <Person />
          </IconButton>
        </Link>
        <Link to="/">
          <img className="header__icon" src={logo} alt="meminder icon" />
        </Link>
        <Link to="/chats">
          <IconButton>
            <Forum />
          </IconButton>
        </Link>
      </header>
    );
  };

  return (
    <>
      {loggedIn
        ? backButton
          ? renderHeaderWithBackButton()
          : renderHeader()
        : renderStartHeader()}
    </>
  );
}

export default Header;
