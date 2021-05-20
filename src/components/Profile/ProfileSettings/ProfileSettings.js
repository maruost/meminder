import React from "react";
import { useHistory } from "react-router-dom";
import EditedInput from "../../EditedInput/EditedInput";
import { useFormik } from "formik";
import { PrimaryButton } from "../../PrimaryButton/PrimaryButton";
import s from "./profileSettings.module.scss";
import authData from "../../utils/authData";
import { settingSchema } from "../schemas";

function ProfileSettings({ ...props }) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: authData.email,
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: settingSchema,
    onSubmit: (data) => {
      console.log(data);
      // send request to API to compare entered old password with password in DB and update data if passwords are equal
    },
  });

  function handleLogout() {
    localStorage.removeItem("token");
    props.onHandleLoginFalse();
    history.push("/welcome-board");
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
      <PrimaryButton
        color="default"
        onClick={handleLogout}
        className={s["esc-button"]}
      >
        Выйти из аккаунта
      </PrimaryButton>
    </div>
  );
}

export default ProfileSettings;
