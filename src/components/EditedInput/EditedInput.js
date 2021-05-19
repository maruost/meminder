import React, { useState, useRef } from "react";
import { Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import s from "./editedInput.module.scss";

function EditedInput({ showIcon, helperText, ...props }) {
  const ref = useRef();
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <div className={s.editedInput}>
      <label htmlFor={`${props.name}`} className={s.label}>
        {props.label}:{" "}
      </label>
      <input {...props} ref={ref} />
      {showIcon ? (
        <IconButton onClick={handleClick} className={s.button}>
          <Edit className={s.icon} />
        </IconButton>
      ) : null}
    </div>
  );
}

export default EditedInput;
