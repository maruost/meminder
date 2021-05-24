import * as yup from "yup";
import moment from "moment";

let EntryDataSchema = yup.object().shape({
  email: yup
    .string()
    .email("Пожалуйста, введите действующий e-mail")
    .required("Поле обязательно должно быть заполнено"),
  password: yup
    .string()
    .min(8, "Минимум 8 символов")
    .required("Поле обязательно должно быть заполнено"),
});

let UserInfoSchema = yup.object().shape({
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
      "Чтобы пользоваться приложением, тебе должно быть не меньше 18 лет",
      (value) => {
        return moment().diff(moment(value), "years") >= 18;
      }
    ),
  gender: yup.string().required("Пожалуйста, заполни это поле"),
  searchingGender: yup.string().required("Пожалуйста, заполни это поле"),
});

export { EntryDataSchema, UserInfoSchema };
