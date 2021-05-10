import React from "react";
import Dropzone from "react-dropzone";
import { Add, Delete } from "@material-ui/icons";
import { useFormik } from "formik";
import "./profileMemeItem.css";
import { DeleteOutline } from "@material-ui/icons";

function ProfileMemeItem({ onHandleFiles }) {
  const formik = useFormik({
    initialValues: {
      files: [],
    },
    onSubmit: (data) => {
      // setValues(data);
    },
  });

  const handleDeleteMeme = () => {
    formik.setFieldValue("files", []);
  };

  return (
    <div className="profileMemeItem__field">
      <Dropzone
        multiple={false}
        accept="image/jpeg, image/png"
        onDrop={(acceptedFiles) => {
          console.log("acc files: ", acceptedFiles);
          const filesWithURL = acceptedFiles.map((file) => {
            return Object.assign(file, {
              preview: URL.createObjectURL(file),
            });
          });
          formik.setFieldValue("files", [
            ...formik.values.files,
            ...filesWithURL,
          ]);
          onHandleFiles(filesWithURL);
        }}
      >
        {({ getRootProps, getInputProps }) => {
          if (formik.values.files[0]) {
            return (
              <div className="profileMemeItem__image-wrapper">
                <img
                  src={formik.values.files[0].preview}
                  className="profileMemeItem__image"
                  alt="мем"
                />
                <button
                  className="profileMemeItem__delete"
                  onClick={handleDeleteMeme}
                >
                  <DeleteOutline />
                </button>
              </div>
            );
          } else {
            return (
              <div className="profileMemeItem__wrapper" {...getRootProps()}>
                <Add style={{ color: "grey" }} />
                <input {...getInputProps()} name="files" />
              </div>
            );
          }
        }}
      </Dropzone>
    </div>
  );
}

export default ProfileMemeItem;
