import * as yup from "yup";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Пожалуйста, введите действующий e-mail")
    .required("Поле обязательно должно быть заполнено"),
  password: yup.string().required("Поле обязательно должно быть заполнено"),
});

export default schema;
