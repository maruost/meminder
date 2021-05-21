import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";
import { MainContainer } from "../MainContainer/MainContainer";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { DefaultButton } from "../DefaultButton/DefaultButton";
import { useFormik } from "formik";
import FakeApi from "../utils/FakeApi";
import s from "./signIn.module.scss";
import schema from "./schema";

const SignIn = ({ onHandleLogin, ...props }) => {
  const { signin } = FakeApi();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (data) => {
      console.log(data);
      const userData = signin(data);
      if (userData.status === 200) {
        onHandleLogin();
        localStorage.setItem("token", userData.token);
      } else {
        console.log(userData.message);
      }
    },
  });

  return (
    <div className={s.signin}>
      <h2 className={s.description}>Войди, чтобы свайпать мемы</h2>
      <MainContainer {...props}>
        <Typography component="h5" variant="subtitle1">
          Вход. Введи E-mail и пароль
        </Typography>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            id="email"
            type="text"
            label="E-mail"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Input
            id="password"
            type="password"
            label="Пароль"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.email && formik.errors.password}
          />
          {formik.isValid ? (
            <PrimaryButton>Войти</PrimaryButton>
          ) : (
            <DefaultButton>Войти</DefaultButton>
          )}
        </Form>
        <div className={s["text-box"]}>
          <Typography component="h5" variant="subtitle1">
            Ещё нет аккаунта?
          </Typography>
          <Link to="../auth" className={s.link}>
            Зарегистрироваться
          </Link>
        </div>
      </MainContainer>
    </div>
  );
};

export default SignIn;
