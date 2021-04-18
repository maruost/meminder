import React, { useEffect } from "react";
import Dropzone from "react-dropzone";
import { Paper, List, ListItem, ListItemText } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";

function DropZone({ name, setFieldValue, values, ...props }) {
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
          console.log("acc files: ", acceptedFiles);
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
          <ListItem key={index}>
            <img src={f.preview} width="50px" height="50px" alt="файл" />
            <ListItemText primary={f.name} secondary={f.size} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default DropZone;
