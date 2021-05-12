import React, { useEffect } from "react";
import Dropzone from "react-dropzone";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import { DeleteOutline } from "@material-ui/icons";
import s from "./dropZone.module.scss";

function DropZone({
  name,
  setFieldValue,
  values,
  onHandleDeleteMeme,
  ...props
}) {
  useEffect(
    () => () => {
      values.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [values]
  );

  return (
    <div className={s.main}>
      <Dropzone
        multiple={true}
        accept="image/jpeg, image/png"
        onDrop={(acceptedFiles) => {
          const filesWithURL = acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          );
          setFieldValue("files", [...values, ...filesWithURL]);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className={s.zone}>
            <IconButton>
              <CloudUpload />
            </IconButton>
            <input {...getInputProps()} name="files" />
            <p className={s.text}>
              Перетащи изображения сюда или нажми, чтобы выбрать файлы
            </p>
          </div>
        )}
      </Dropzone>
      <div className={s.images}>
        <List>
          {values.map((f, index) => (
            <ListItem key={f.name}>
              <img src={f.preview} alt="файл" className={s.preview} />
              <ListItemText
                primary={f.name}
                secondary={`${(f.size / 1000).toFixed(2)}KB`}
              />
              <button
                className={s["delete-btn"]}
                type="button"
                onClick={onHandleDeleteMeme}
              >
                <IconButton>
                  <DeleteOutline />
                </IconButton>
              </button>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default DropZone;
