import React from "react";
import { useHistory } from "react-router-dom";
import DropZone from "../DropZone/DropZone";
import { useFormik } from "formik";
import { Form } from "../Form/Form";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { MainContainer } from "../MainContainer/MainContainer";
import { Typography } from "@material-ui/core";
import { useData } from "../DataContext/DataContext";
import Swal from "sweetalert2";
import s from "./step3.module.scss";

function Step3({ onHandleLogin, ...props }) {
  const history = useHistory();
  const { data, setValues } = useData();

  const formik = useFormik({
    initialValues: {
      files: [],
    },
    onSubmit: (files) => {
      setValues(files);
      console.log(data);
      //send POST request to API with userData and userFiles from dataContext
      Swal.fire({
        title: "Регистрация прошла успешно",
        text: 'Нажмите кнопку "Далее", чтобы начать пользоваться приложением',
        icon: "success",
        confirmButtonText: "Далее",
      }).then(() => {
        history.push("../signin");
      });
    },
  });

  const handleDeleteMeme = (index) => {
    const values = formik.values.files;
    values.splice(index, 1);
    formik.setFieldValue("files", [...values]);
  };

  return (
    <div className={s.step}>
      <MainContainer {...props}>
        <Typography component="h5" variant="subtitle1">
          Шаг 3: Загрузи свои любимые мемы
        </Typography>
        <Form onSubmit={formik.handleSubmit}>
          <DropZone
            name="files"
            setFieldValue={formik.setFieldValue}
            values={formik.values.files}
            onHandleDeleteMeme={handleDeleteMeme}
          />
          <PrimaryButton color={!formik.isValid ? "default" : "primary"}>
            Готово!
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
    </div>
  );
}

export default Step3;
