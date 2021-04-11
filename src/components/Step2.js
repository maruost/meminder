import {
  Typography,
  FormControlLabel,
  Checkbox,
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
import * as Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContex";

const schema = Joi.object({
  firstName: Joi.string()
    .pattern(/^([^0-9]*)$/)
    .required()
    .messages({
      "string.empty": `Поле "Имя" должно быть обязательно заполнено`,
    }),
  lastName: Joi.string()
    .pattern(/^([^0-9]*)$/)
    .required()
    .messages({
      "string.empty": `Поле "Фамилия" должно быть обязательно заполнено`,
    }),
}).unknown();

export const Step2 = ({ ...props }) => {
  const history = useHistory();
  // const { data, setValues } = useData();
  const [gender, setGender] = useState();
  const [searchingGender, setSearchingGender] = useState();
  const [locationState, setLocationState] = useState({
    locationToFind: false,
  });

  const handleLocationChange = (event) => {
    setLocationState({ [event.target.name]: event.target.checked });
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSearchingGenderChange = (e) => {
    setSearchingGender(e.target.value);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    formState,
  } = useForm({
    // defaultValues: {
    //   email: data.email,
    //   hasPhone: data.hasPhone,
    //   phoneNumber: data.phoneNumber,
    // },
    mode: "onChange",
    resolver: joiResolver(schema),
  });

  const { isValid } = formState;
  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    history.push("/result");
    if (!hasPhone) data.phoneNumber = null;
    // setValues(data);
  };
  return (
    <MainContainer {...props}>
      <Typography component="h5" variant="p">
        Шаг 2: Расскажи немного о себе
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName")}
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register("lastName")}
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <TextField
          id="date"
          {...register("date")}
          label="Дата рождения"
          type="date"
          name="date"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors.date}
          helperText={errors?.date?.message}
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">Твой пол</FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="gender1"
            value={gender}
            onChange={handleGenderChange}
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
            aria-label="gender"
            name="gender1"
            value={searchingGender}
            onChange={handleSearchingGenderChange}
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
        <Input
          {...register("location")}
          id="location"
          type="text"
          label="Город"
          name="location"
          error={!!errors.location}
          helperText={errors?.location?.message}
        />
        <FormControlLabel
          control={
            <Switch
              checked={locationState.locationToFind}
              onChange={handleLocationChange}
              name="locationToFind"
            />
          }
          label="Ты хочешь найти пару в твоём городе?"
        />
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Здесь можешь написать немного о себе"
          rowsMax={8}
        />
        <PrimaryButton disabled={!isValid}>Дальше</PrimaryButton>
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
