import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DropZone from "../components/DropZone/DropZone";
import { useFormik } from "formik";
import { Form } from "./Form";
import { PrimaryButton } from "./PrimaryButton";
import { MainContainer } from "./MainContainer";
import { Typography } from "@material-ui/core";

function Step3({ ...props }) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      files: [],
    },
    onSubmit: (data) => {
      // setValues(data);
    },
  });
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
  );
}

export default Step3;
