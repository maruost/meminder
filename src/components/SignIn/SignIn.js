import { TextField, Typography } from "@material-ui/core";
import { useRouteMatch, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Form } from "../Form";
import { Input } from "../Input";
import { MainContainer } from "../MainContainer";
import { PrimaryButton } from "../PrimaryButton";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext/DataContext";
import * as yup from "yup";
import { useFormik } from "formik";
import FakeApi from "../utils/FakeApi";

let schema = yup.object().shape({
  email: yup.string().email("Пожалуйста, введите действующий e-mail"),
  password: yup.string(),
});

const SignIn = ({ onHandleLogin, ...props }) => {
  const history = useHistory();
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
    <MainContainer {...props}>
      <Typography component="h5" variant="subtitle1">
        Вход. Введите E-mail и пароль
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
        <PrimaryButton color={!formik.isValid ? "default" : "primary"}>
          Войти
        </PrimaryButton>
        <Typography component="h5" variant="subtitle1">
          Ещё нет аккаунта?
        </Typography>
        <Link to="../auth">Зарегистрироваться</Link>
      </Form>
    </MainContainer>
  );
};

export default SignIn;
