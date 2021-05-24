import {
  Typography,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@material-ui/core";
import { React } from "react";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";
import { MainContainer } from "../MainContainer/MainContainer";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { DefaultButton } from "../DefaultButton/DefaultButton";
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext/DataContext";
import { useFormik } from "formik";
import s from "./step2.module.scss";
import { UserInfoSchema } from "./schemas";
import { Switcher } from "../Switcher/Switcher";

export const Step2 = ({ ...props }) => {
  const history = useHistory();
  const { data, setValues } = useData();

  const formik = useFormik({
    initialValues: {
      firstName: data.firstName ?? "",
      lastName: data.lastName ?? "",
      date: data.date ?? "",
      gender: data.gender ?? "",
      searchingGender: data.searchingGender ?? "",
      location: data.location ?? "",
      locationToFind: data.locationToFind ?? false,
    },
    validationSchema: UserInfoSchema,
    onSubmit: (data) => {
      history.push(`${props.url}/step3`);
      setValues(data);
    },
  });

  return (
    <div className={s.step}>
      <MainContainer {...props}>
        <Typography component="h5" variant="subtitle1" className={s.title}>
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
            size="small"
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
            size="small"
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
            size="small"
          />
          <FormControl
            component="fieldset"
            fullWidth={true}
            error={formik.touched.gender && Boolean(formik.errors.gender)}
          >
            <FormLabel component="legend">Твой пол</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={formik.values.gender || ""}
              onChange={formik.handleChange}
              required
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
            <FormHelperText>
              {formik.touched.gender && formik.errors.gender}
            </FormHelperText>
          </FormControl>
          <FormControl
            component="fieldset"
            fullWidth={true}
            error={
              formik.touched.searchingGender &&
              Boolean(formik.errors.searchingGender)
            }
          >
            <FormLabel component="legend">Кого ты ищещь?</FormLabel>
            <RadioGroup
              row
              aria-label="searchingGender"
              name="searchingGender"
              value={formik.values.searchingGender}
              onChange={formik.handleChange}
              required
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
            <FormHelperText>
              {formik.touched.searchingGender && formik.errors.searchingGender}
            </FormHelperText>
          </FormControl>
          <div className={s.location}>
            <Input
              id="location"
              type="text"
              label="Город"
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
              size="small"
              fullWidth={false}
            />
            <FormControlLabel
              control={
                <Switcher
                  checked={
                    formik.values.location ? formik.values.locationToFind : null
                  }
                  name="locationToFind"
                  value={formik.values.locationToFind}
                  onChange={formik.handleChange}
                  disabled={formik.values.location ? false : true}
                />
              }
              label="Найти пару в моём городе"
            />
          </div>
          {formik.isValid ? (
            <PrimaryButton>Далее</PrimaryButton>
          ) : (
            <DefaultButton>Далее</DefaultButton>
          )}
          <DefaultButton
            type="button"
            onClick={() => {
              history.goBack();
            }}
          >
            Назад
          </DefaultButton>
        </Form>
      </MainContainer>
    </div>
  );
};
