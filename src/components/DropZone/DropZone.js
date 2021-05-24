import React, { useEffect } from "react";
import Dropzone from "react-dropzone";
import { List, ListItem, ListItemText, IconButton } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import { DeleteOutline } from "@material-ui/icons";
import s from "./dropZone.module.scss";
import uniqid from "uniqid";

const Item = ({ item, ...props }) => {
  const handleClick = () => {
    props.onHandleDeleteMeme(item);
    console.log(item.preview);
  };

  return (
    <ListItem>
      <img src={item.preview} alt="файл" className={s.preview} />
      <ListItemText
        primary={item.name}
        secondary={`${(item.size / 1000).toFixed(2)}KB`}
      />
      <IconButton
        className={s["delete-btn"]}
        type="button"
        onClick={handleClick}
      >
        <DeleteOutline />
      </IconButton>
    </ListItem>
  );
};

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
        maxFiles={9}
        accept="image/jpeg, image/png"
        onDrop={(acceptedFiles) => {
          const filesWithURL = acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              id: uniqid(),
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
            <p className={s.notification}>
              (не более 9 изображений в формате jpeg/png)
            </p>
          </div>
        )}
      </Dropzone>
      <div className={s.images}>
        <List>
          {values.map((f, index) => (
            <Item
              key={f.id}
              id={f.id}
              item={f}
              onHandleDeleteMeme={onHandleDeleteMeme}
            ></Item>
          ))}
        </List>
      </div>
    </div>
  );
}

export default DropZone;
