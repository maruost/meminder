import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Add } from "@material-ui/icons";
import s from "./profileMemeItem.module.scss";
import { DeleteOutline } from "@material-ui/icons";
import uniqid from "uniqid";

function ProfileMemeItem({ onHandleFiles, onHandleDeleteFiles, ...props }) {
  const [files, setFiles] = useState([]);

  const handleDeleteMeme = () => {
    onHandleDeleteFiles(files[0]);
    setFiles([]);
  };

  return (
    <div className={s.field}>
      <Dropzone
        multiple={false}
        accept="image/jpeg, image/png"
        onDrop={(acceptedFiles) => {
          console.log("acc files: ", acceptedFiles);
          const filesWithURL = acceptedFiles.map((file) => {
            return Object.assign(file, {
              preview: URL.createObjectURL(file),
              id: uniqid(),
            });
          });
          setFiles([...files, ...filesWithURL]);
          onHandleFiles(filesWithURL);
        }}
      >
        {({ getRootProps, getInputProps }) => {
          if (files[0]) {
            return (
              <div className={s["image-wrapper"]}>
                <img src={files[0].preview} className={s.image} alt="мем" />
                <button className={s.delete} onClick={handleDeleteMeme}>
                  <DeleteOutline />
                </button>
              </div>
            );
          } else {
            return (
              <div className={s.wrapper} {...getRootProps()}>
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
