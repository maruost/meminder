import React, { useEffect } from "react";
import Dropzone from "react-dropzone";
import { Paper, List, ListItem, ListItemText } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import { DeleteOutline } from "@material-ui/icons";
import "./dropZone.css";

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
    <div>
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
          <Paper variant="outlined" {...getRootProps()}>
            <CloudUpload />
            <input {...getInputProps()} name="files" />
            <p>Перетащи изображения сюда, или нажми, чтобы выбрать файлы</p>
          </Paper>
        )}
      </Dropzone>
      <List>
        {values.map((f, index) => (
          <ListItem key={f.name}>
            <img src={f.preview} width="50px" height="50px" alt="файл" />
            <ListItemText primary={f.name} secondary={f.size} />
            <button
              className="dropzone__deleteBtn"
              type="button"
              onClick={onHandleDeleteMeme}
            >
              <DeleteOutline />
            </button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default DropZone;
