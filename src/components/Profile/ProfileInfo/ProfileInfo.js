import React from "react";
import EditedInput from "../../EditedInput/EditedInput";
import { useFormik } from "formik";
import { Input } from "../../Input/Input";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Switch,
  TextareaAutosize,
} from "@material-ui/core";
import { PrimaryButton } from "../../PrimaryButton/PrimaryButton";
import s from "./profileInfo.module.scss";
import authData from "../../utils/authData";
import { userSchema } from "../schemas";

function ProfileInfo() {
  const formik = useFormik({
    initialValues: {
      firstName: authData.firstName,
      lastName: authData.lastName,
      date: authData.date,
      gender: authData.gender,
      searchingGender: authData.searchingGender,
      location: authData.location,
      locationToFind: authData.locationToFind,
      about: authData.about,
    },
    validationSchema: userSchema,
    onSubmit: (data) => {
      console.log(data);
      //send PUT request to API to update userInfoData
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
          size="small"
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
              control={<Radio color="default" />}
              label="Женщина"
            />
            <FormControlLabel
              value="male"
              control={<Radio color="default" />}
              label="Мужчина"
            />
            <FormControlLabel
              value="other"
              control={<Radio color="default" />}
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
              control={<Radio color="default" />}
              label="Женщину"
            />
            <FormControlLabel
              value="male"
              control={<Radio color="default" />}
              label="Мужчину"
            />
            <FormControlLabel
              value="other"
              control={<Radio color="default" />}
              label="Другое"
            />
            <FormControlLabel
              value="all"
              control={<Radio color="default" />}
              label="Пол не важен"
            />
          </RadioGroup>
        </FormControl>
        <Input
          id="location"
          type="text"
          label="Город"
          name="location"
          size="small"
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
                color="primary"
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
