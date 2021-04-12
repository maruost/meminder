import React from "react";
import Dropzone from "react-dropzone";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { CloudUpload, InsertDriveFile } from "@material-ui/icons";

function DropZone({ name, setFieldValue, values, ...props }) {
  return (
    <div>
      <Dropzone
        multiple={true}
        accept="image/jpeg, image/png"
        onDrop={(acceptedFiles) => {
          setFieldValue("files", [...values, ...acceptedFiles]);
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
            <ListItemIcon>
              <InsertDriveFile />
            </ListItemIcon>
            <ListItemText primary={f.name} secondary={f.size} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default DropZone;
