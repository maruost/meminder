import React, { useRef, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import EditedInput from "../../EditedInput/EditedInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { PrimaryButton } from "../../PrimaryButton";
import { Domain } from "@material-ui/icons";
import s from "./profileSettings.module.scss";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Пожалуйста, введите действующий e-mail")
    .required("Поле обязательно должно быть заполнено"),
  oldPassword: yup
    .string()
    .min(8, "Минимум 8 символов")
    .required("Поле обязательно должно быть заполнено"),
  newPassword: yup
    .string()
    .min(8, "Минимум 8 символов")
    .required("Поле обязательно должно быть заполнено"),
});

function ProfileSettings({ ...props }) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "msmsmmsdm@yandex.ru",
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: schema,
    onSubmit: (data) => {
      console.log(data);
      //   if (data) {
      //     history.push(`${url}/step2`);
      // setValues(data);
    },
  });

  function handleLogout() {
    localStorage.removeItem("token");
    props.onHandleLoginFalse();
    history.push("../welcome-board");
  }
  return (
    <div className={s.profileSettings}>
      <h2 className={s.title}>Настройки профиля</h2>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <EditedInput
          id="email"
          type="text"
          label="E-mail"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          showIcon={true}
        />
        <EditedInput
          id="oldPassword"
          type="password"
          label="Старый пароль"
          name="oldPassword"
          value={formik.values.password}
          onChange={formik.handleChange}
          required
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.email && formik.errors.password}
        />
        <EditedInput
          id="newPassword"
          type="password"
          label="Новый пароль"
          name="newPassword"
          value={formik.values.password}
          onChange={formik.handleChange}
          required
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.email && formik.errors.password}
        />
        <PrimaryButton size="small">Сохранить изменения</PrimaryButton>
      </form>
      <PrimaryButton color="default" onClick={handleLogout}>
        Выйти из аккаунта
      </PrimaryButton>
    </div>
  );
}

export default ProfileSettings;
