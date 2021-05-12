import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import s from "./profileTabs.module.scss";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(4),
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ProfileTabs({ children }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { url, path } = useRouteMatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="ant example"
          centered
        >
          <AntTab component={Link} to={url} label="Обо мне" className={s.tab} />
          <AntTab
            component={Link}
            to={`${url}/memes`}
            label="Мои мемы"
            className={s.tab}
          />
          <AntTab
            component={Link}
            to={`${url}/settings`}
            label="Настройки профиля"
            className={s.tab}
          />
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
