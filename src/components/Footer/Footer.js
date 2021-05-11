import React from "react";
import { Link } from "react-router-dom";
import s from "./footer.module.scss";
import { GitHub, Telegram } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s["text-box"]}>
        <p className={s.info}>&#169; 2021. Остапенко Мария</p>
      </div>
      <div className={s["icons-box"]}>
        <a
          href="https://github.com/maruost"
          target="_blank"
          className={s.link}
          alt="github"
          rel="noreferrer"
        >
          <IconButton className={s.icon}>
            <GitHub />
          </IconButton>
        </a>
        <a
          href="https://t.me/maru_ost"
          target="_blank"
          className={s.link}
          alt="telegram"
          rel="noreferrer"
        >
          <IconButton className={s.icon}>
            <Telegram />
          </IconButton>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
