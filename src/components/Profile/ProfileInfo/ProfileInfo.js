import React from "react";
import EditedInput from "../../EditedInput/EditedInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { Input } from "../../Input";
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
import moment from "moment";
import { PrimaryButton } from "../../PrimaryButton";
import s from "./profileInfo.module.scss";

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

function ProfileInfo() {
  const formik = useFormik({
    initialValues: {
      firstName: "DFDFGDFG",
      lastName: "DFGD",
      date: "23-03-1996",
      gender: "female",
      searchingGender: "male",
      location: "Moscow",
      locationToFind: false,
      about: "aaaa",
    },
    validationSchema: schema,
    onSubmit: (data) => {
      //   history.push("/step3");
      // setValues(data);
    },
  });
  return (
    <div className={s.profileInfo}>
      <h2 className={s.title}>Информация обо мне</h2>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <EditedInput
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          required
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          showIcon={true}
        />
        <EditedInput
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          required
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          showIcon={true}
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
          <FormLabel component="legend">Мой пол</FormLabel>
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
          <FormLabel component="legend">Я ищу</FormLabel>
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
              label="Женщину"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Мужчину"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Другое"
            />
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="Пол не важен"
            />
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
        <div className={s.slider}>
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
            label="Искать пару в моём городе"
          />
        </div>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Кое-что обо мне"
          name="about"
          rowsMax={8}
          value={formik.values.about}
          onChange={formik.handleChange}
          className={s["text-area"]}
        />
        <PrimaryButton>Сохранить изменения</PrimaryButton>
      </form>
    </div>
  );
}

export default ProfileInfo;
