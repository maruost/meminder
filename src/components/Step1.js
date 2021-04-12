import { TextField, Typography } from "@material-ui/core";
import { useRouteMatch, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import { Input } from "./Input";
import { MainContainer } from "./MainContainer";
import { PrimaryButton } from "./PrimaryButton";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContex";
import * as yup from "yup";
import { useFormik } from "formik";
import { Step2 } from "./Step2";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Пожалуйста, введите действующий e-mail")
    .required("Поле обязательно должно быть заполнено"),
  password: yup
    .string()
    .min(8, "Минимум 8 символов")
    .required("Поле обязательно должно быть заполнено"),
});

export const Step1 = ({ ...props }) => {
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (data) => {
      console.log(data);
      if (data) {
        history.push(`${url}/step2`);
        // setValues(data);
      }
    },
  });

  return (
    <MainContainer {...props}>
      <Typography component="h5" variant="subtitle1">
        Шаг 1: E-mail, Пароль
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
        <Link to={"/step2"}>
          <PrimaryButton color={!formik.isValid ? "default" : "primary"}>
            Дальше
          </PrimaryButton>
        </Link>
        <Typography component="h5" variant="subtitle1">
          Уже есть аккаунт? Войти
        </Typography>
      </Form>
    </MainContainer>
  );
};
