import React, { useState } from "react";
import "./profileMemes.css";
import { PrimaryButton } from "../../PrimaryButton";
import ProfileMemeItem from "./ProfileMemeItem/ProfileMemeItem";

function ProfileMemes() {
  const [files, setFiles] = useState([]);

  const handleFiles = (file) => {
    console.log(file); //// !!!!!!!! надо сделать удаление конкретного элемента массива и его перезапись
    // setFiles([files, ...file]);
  };
  return (
    <div className="profileMemes">
      <div className="profileMemes__container">
        <ProfileMemeItem onHandleFiles={handleFiles} />
        <ProfileMemeItem onHandleFiles={handleFiles} />
        <ProfileMemeItem onHandleFiles={handleFiles} />
        <ProfileMemeItem onHandleFiles={handleFiles} />
        <ProfileMemeItem onHandleFiles={handleFiles} />
        <ProfileMemeItem onHandleFiles={handleFiles} />
        <ProfileMemeItem onHandleFiles={handleFiles} />
        <ProfileMemeItem onHandleFiles={handleFiles} />
        <ProfileMemeItem onHandleFiles={handleFiles} />
      </div>
      <PrimaryButton
        onClick={() => {
          console.log(files);
        }}
      >
        Сохранить
      </PrimaryButton>
    </div>
  );
}

export default ProfileMemes;
