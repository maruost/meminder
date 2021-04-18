import React, { useRef, useState } from "react";
import EditedInput from "../EditedInput/EditedInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { PrimaryButton } from "../PrimaryButton";

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

function ProfileSettings() {
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
  return (
    <div className="profileSettings">
      <h2 className="profileSettings__title">Настройки профиля</h2>
      <form className="profileSettings__form" onSubmit={formik.handleSubmit}>
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
      <PrimaryButton color="default">Выйти из аккаунта</PrimaryButton>
    </div>
  );
}

export default ProfileSettings;
