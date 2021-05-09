import React, { useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import DropZone from "../DropZone/DropZone";
import { useFormik } from "formik";
import { Form } from "../Form";
import { PrimaryButton } from "../PrimaryButton";
import { MainContainer } from "../MainContainer";
import { Typography } from "@material-ui/core";

function Step3({ onHandleLogin, ...props }) {
  const history = useHistory();
  const [referrer, setRefferer] = useState(null);

  const formik = useFormik({
    initialValues: {
      files: [],
    },
    onSubmit: (data) => {
      setRefferer("/");
      if (referrer) {
        history.push(referrer);
      }
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
        <PrimaryButton
          color={!formik.isValid ? "default" : "primary"}
          onClick={() => {
            onHandleLogin();
          }}
        >
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
  );
}

export default Step3;
