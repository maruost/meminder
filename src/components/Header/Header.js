import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { Person, Forum, ArrowBackIos } from "@material-ui/icons";
import s from "./header.module.scss";
import logo from "../../static/images/logo_meminder.png";

function Header({ backButton, loggedIn, ...props }) {
  const renderStartHeader = () => {
    return (
      <header className={s.header}>
        <div className={s.wrapper}>
          <Link to="/" className={s["logo-name"]}>
            Meminder
          </Link>
          <Link to="/">
            <img className={s.icon} src={logo} alt="meminder icon" />
          </Link>
          <div className={s["auth-box"]}>
            <NavLink
              to="/signin"
              activeClassName={s["text-link_active"]}
              className={`${s.link} ${s["text-link"]}`}
            >
              Вход
            </NavLink>
            <NavLink
              to="/auth"
              activeClassName={s["text-link_active"]}
              className={`${s.link} ${s["text-link"]}`}
            >
              Регистрация
            </NavLink>
          </div>
        </div>
      </header>
    );
  };

  const renderHeaderWithBackButton = () => {
    return (
      <header className={s.header}>
        <div className={s.wrapper}>
          <Link to={backButton} className={s.link}>
            <IconButton>
              <ArrowBackIos />
            </IconButton>
          </Link>
          <Link to="/" className={s.link}>
            <img className={s.icon} src={logo} alt="meminder icon" />
          </Link>
          <Link to="/chats" className={s.link}>
            <IconButton>
              <Forum />
            </IconButton>
          </Link>
        </div>
      </header>
    );
  };

  const renderHeader = () => {
    return (
      <header className={s.header}>
        <div className={s.wrapper}>
          <Link to={"/profile"} className={s.link}>
            <IconButton>
              <Person />
            </IconButton>
          </Link>
          <Link to="/" className={s.link}>
            <img className={s.icon} src={logo} alt="meminder icon" />
          </Link>
          <Link to="/chats" className={s.link}>
            <IconButton>
              <Forum />
            </IconButton>
          </Link>
        </div>
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
