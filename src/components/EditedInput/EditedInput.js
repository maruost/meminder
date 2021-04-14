import React, { useState, useRef } from "react";
import { Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import "./editedInput.css";

function EditedInput({ ...props }) {
  const ref = useRef();
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <div className="editedInput">
      <label for={`${props.name}`} className="editedInput__label">
        {props.label}:{" "}
      </label>
      <input {...props} ref={ref} />
      {props.showIcon ? (
        <IconButton>
          <Edit onClick={handleClick} />
        </IconButton>
      ) : null}
    </div>
  );
}

export default EditedInput;
