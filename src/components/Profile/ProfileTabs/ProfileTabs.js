import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function ProfileTabs({ children }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { url, path } = useRouteMatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab component={Link} to={url} label="Обо мне" />
        <Tab component={Link} to={`${url}/memes`} label="Мои мемы" />
        <Tab
          component={Link}
          to={`${url}/settings`}
          label="Настройки профиля"
        />
      </Tabs>
    </Paper>
  );
}
