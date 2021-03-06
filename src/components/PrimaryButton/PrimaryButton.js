import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 0, 1),
    color: blueGrey[50],
    backgroundColor: blueGrey[500],
    borderColor: blueGrey[500],
    "&:hover": {
      backgroundColor: blueGrey[700],
      borderColor: blueGrey[700],
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: blueGrey[800],
      borderColor: blueGrey[800],
    },
  },
}));

export const PrimaryButton = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      className={styles.root}
      {...props}
    >
      {children}
    </Button>
  );
};
