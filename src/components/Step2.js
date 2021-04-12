import {
  Typography,
  FormControlLabel,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Switch,
  TextareaAutosize,
} from "@material-ui/core";
import { React, useState } from "react";
import { Form } from "./Form";
import { Input } from "./Input";
import { MainContainer } from "./MainContainer";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./PrimaryButton";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContex";
import * as yup from "yup";
import { useFormik } from "formik";
import moment from "moment";

let schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Минимум 2 символа")
    .required("Поле обязательно должно быть заполнено"),
  lastName: yup
    .string()
    .min(2, "Минимум 2 символа")
    .required("Поле обязательно должно быть заполнено"),
  date: yup
    .string()
    .required("Пожалуйста, укажи дату рождения")
    .test(
      "DOB",
      "Чтобы пользоваться приложением тебе должно быть не меньше 18 лет",
      (value) => {
        return moment().diff(moment(value), "years") >= 18;
      }
    ),
  gender: yup.string().required(),
  searchingGender: yup.string().required(),
});

export const Step2 = ({ ...props }) => {
  const history = useHistory();
  // const { data, setValues } = useData();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      date: "",
      gender: "",
      searchingGender: "",
      location: "",
      locationToFind: false,
      about: "",
    },
    validationSchema: schema,
    onSubmit: (data) => {
      history.push("/step3");
      // setValues(data);
    },
  });

  return (
    <MainContainer {...props}>
      <Typography component="h5" variant="subtitle1">
        Шаг 2: Расскажи немного о себе
      </Typography>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          required
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <Input
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          required
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <Input
          id="date"
          label="Дата рождения"
          type="date"
          name="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={formik.values.date}
          onChange={formik.handleChange}
          required
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">Твой пол</FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            value={formik.values.gender || ""}
            onChange={formik.handleChange}
            required
            error={formik.touched.gender && Boolean(formik.errors.gender)}
            helperText={formik.touched.gender && formik.errors.gender}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Женщина"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Мужчина"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Другое"
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Кого ты ищещь?</FormLabel>
          <RadioGroup
            row
            aria-label="searchingGender"
            name="searchingGender"
            value={formik.values.searchingGender}
            onChange={formik.handleChange}
            required
            error={
              formik.touched.searchingGender &&
              Boolean(formik.errors.searchingGender)
            }
            helperText={
              formik.touched.searchingGender && formik.errors.searchingGender
            }
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Женщина"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Мужчина"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Другое"
            />
            <FormControlLabel value="all" control={<Radio />} label="Любой" />
          </RadioGroup>
        </FormControl>
        <Input
          id="location"
          type="text"
          label="Город"
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          error={formik.touched.location && Boolean(formik.errors.location)}
          helperText={formik.touched.location && formik.errors.location}
        />
        <FormControlLabel
          control={
            <Switch
              checked={
                formik.values.location ? formik.values.locationToFind : null
              }
              name="locationToFind"
              value={formik.values.locationToFind}
              onChange={formik.handleChange}
              error={
                formik.touched.locationToFind &&
                Boolean(formik.errors.locationToFind)
              }
              helperText={
                formik.touched.locationToFind && formik.errors.locationToFind
              }
              disabled={formik.values.location ? false : true}
            />
          }
          label="Ты хочешь найти пару в твоём городе?"
        />
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Здесь можешь написать немного о себе"
          name="about"
          rowsMax={8}
          value={formik.values.about}
          onChange={formik.handleChange}
        />
        <PrimaryButton color={!formik.isValid ? "default" : "primary"}>
          Дальше
        </PrimaryButton>
        <PrimaryButton
          color="default"
          type="button"
          onClick={() => {
            history.goBack();
          }}
        >
          Назад
        </PrimaryButton>
      </Form>
    </MainContainer>
  );
};
