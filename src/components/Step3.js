import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DropZone from "../components/DropZone/DropZone";
import { useFormik } from "formik";
import { Form } from "./Form";

import Dropzone from "react-dropzone";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  CloudUpload,
  FormatLineSpacing,
  InsertDriveFile,
} from "@material-ui/icons";

function Step3() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      files: [],
    },
    onSubmit: (data) => {
      history.push("/step3");
      // setValues(data);
    },
  });
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <DropZone
          name="files"
          setFieldValue={formik.setFieldValue}
          values={formik.values.files}
        />
      </Form>
    </div>
  );
}

export default Step3;
