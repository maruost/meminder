import { Typography } from "@material-ui/core";
import { useRouteMatch } from "react-router-dom";
import React, { useEffect } from "react";
import { Form } from "./Form";
import { Input } from "./Input";
import { MainContainer } from "./MainContainer";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./PrimaryButton";
import * as Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContex";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// const schema = Joi.object({
//   email: Joi.string()
//     .email({ tlds: { allow: false } })
//     .required()
//     .messages({
//       "string.empty": `Поле "E-mail" должно быть обязательно заполнено`,
//       "string.email": `Введите действующий E-mail`,
//     }),
//   password: Joi.string().required().messages({
//     "string.empty": `Поле "Пароль" должно быть обязательно заполнено`,
//   }),
// });

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.number().required(),
});

export const Step1 = ({ ...props }) => {
  const history = useHistory();
  // const { data, setValues } = useData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({
    // defaultValues: { firstName: data.firstName, lastName: data.lastName },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { isValid } = formState;
  const onSubmit = (data) => {
    history.push("/step2");
    // setValues(data);
  };

  return (
    <MainContainer {...props}>
      <Typography component="h5" variant="p">
        Шаг 1: E-mail, Пароль
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          id="email"
          type="text"
          label="E-mail"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <Input
          {...register("password")}
          id="password"
          type="password"
          label="Пароль"
          name="password"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <PrimaryButton disabled={!isValid}>Дальше</PrimaryButton>
        <Typography component="p" variant="p">
          Уже есть аккаунт? Войти
        </Typography>
      </Form>
    </MainContainer>
  );
};
