import React from "react";
import "./welcomeBoard.css";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function WelcomeBoard() {
  return (
    <div className="welcomeBoard">
      <h1 className="welcomeBoard__title">Meminder</h1>
      <p className="welcomeBoard__about">
        Привет! Это 'Meminder' - приложение в котором ты можешь найти своих
        единомышленников по мемам. Загружай свои любимые мемы, свайпай чужие и
        находи идеальную пару.
      </p>
      <Button variant="outlined" component={NavLink} to="/registration">
        ъуъ!
      </Button>
    </div>
  );
}

export default WelcomeBoard;
