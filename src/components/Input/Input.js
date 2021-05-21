import { TextField } from "@material-ui/core";
import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

const useStyles = makeStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: blueGrey[500],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: blueGrey[500],
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: blueGrey[500],
      },
    },
  },
}));

export const Input = forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      inputRef={ref}
      className={classes.root}
      {...props}
    ></TextField>
  );
});
