import React from "react";
import s from "./notFound.module.scss";

function NotFound() {
  return (
    <div className={s["not-found"]}>
      Ошибка 404. Такой страницы не существует
    </div>
  );
}

export default NotFound;
