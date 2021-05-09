import React, { useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import DropZone from "../DropZone/DropZone";
import { useFormik } from "formik";
import { Form } from "../Form";
import { PrimaryButton } from "../PrimaryButton";
import { MainContainer } from "../MainContainer";
import { Typography } from "@material-ui/core";
import { useData } from "../DataContext/DataContext";
import Swal from "sweetalert2";

function Step3({ onHandleLogin, ...props }) {
  const history = useHistory();
  const { data, setValues } = useData();

  const formik = useFormik({
    initialValues: {
      files: [],
    },
    onSubmit: (files) => {
      console.log(files);
      setValues(files);
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
        <Typography component="h5" variant="subtitle1">
          Уже есть аккаунт?
        </Typography>
        <Link to="../signin">Войти</Link>
      </Form>
    </MainContainer>
  );
}

export default Step3;
