import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";
import { MainContainer } from "../MainContainer/MainContainer";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { DefaultButton } from "../DefaultButton/DefaultButton";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext/DataContext";
import { useFormik } from "formik";
import s from "./step1.module.scss";
import { EntryDataSchema } from "./schemas";

export const Step1 = ({ ...props }) => {
  const history = useHistory();
  const { data, setValues } = useData();
  const formik = useFormik({
    initialValues: {
      email: data.email ?? "",
      password: "",
    },
    validationSchema: EntryDataSchema,
    onSubmit: (data) => {
      console.log(data);
      if (data) {
        history.push(`${props.url}/step2`);
        setValues(data);
      }
    },
  });

  return (
    <div className={s.step}>
      <h2 className={s.description}>Создай аккаунт, чтобы свайпать мемы</h2>
      <MainContainer {...props}>
        <Typography component="h5" variant="subtitle1">
          Регистрация. Шаг 1: E-mail, Пароль
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
            <PrimaryButton>Далее</PrimaryButton>
          ) : (
            <DefaultButton>Далее</DefaultButton>
          )}
        </Form>
        <div className={s["text-box"]}>
          <Typography component="h5" variant="subtitle1">
            Уже есть аккаунт?
          </Typography>
          <Link to="./signin" className={s.link}>
            Войти
          </Link>
        </div>
      </MainContainer>
    </div>
  );
};
