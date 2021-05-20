import React from "react";
import s from "./welcomeBoard.module.scss";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function WelcomeBoard() {
  return (
    <div className={s.welcomeBoard}>
      <h1 className={s.title}>Meminder</h1>
      <p className={s.about}>
        Привет! Это 'Meminder' - приложение, в котором ты можешь найти своих
        единомышленников по мемам. Загружай свои любимые мемы, свайпай чужие и
        находи идеальную пару.
      </p>
      <Button variant="outlined" component={NavLink} to="/auth">
        ъуъ!
      </Button>
    </div>
  );
}

export default WelcomeBoard;
