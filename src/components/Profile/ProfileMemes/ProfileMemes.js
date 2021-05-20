import React from "react";
import { PrimaryButton } from "../../PrimaryButton/PrimaryButton";
import ProfileMemeItem from "./ProfileMemeItem/ProfileMemeItem";
import { useFormik } from "formik";
import s from "./profileMemes.module.scss";

function ProfileMemes() {
  const formik = useFormik({
    initialValues: {
      files: [],
    },
    onSubmit: (data) => {
      console.log(data);
      //send PUT request to API to update files updated by user
    },
  });

  const handleFiles = (file) => {
    formik.setFieldValue("files", [...formik.values.files, ...file]);
  };

  const handleDeleteFiles = (file) => {
    const filteredFiles = formik.values.files.filter(
      (item) => item.id !== file.id
    );
    formik.setFieldValue("files", [...filteredFiles]);
  };

  const renderFieldsByNum = (num) => {
    const arr = new Array(num).fill(0);
    return arr.map((el, index) => (
      <ProfileMemeItem
        key={index}
        onHandleFiles={handleFiles}
        onHandleDeleteFiles={handleDeleteFiles}
      />
    ));
  };

  return (
    <div className={s.profileMemes}>
      <h2 className={s.title}>Мои мемы</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className={s.container}>{renderFieldsByNum(9)}</div>
        <PrimaryButton>Сохранить</PrimaryButton>
      </form>
    </div>
  );
}

export default ProfileMemes;
