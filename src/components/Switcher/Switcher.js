import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";

export const Switcher = withStyles({
  switchBase: {
    color: teal[600],
    "&$checked": {
      color: teal[600],
    },
    "&$checked + $track": {
      backgroundColor: teal[600],
    },
  },
  thumb: {
    width: 19,
    height: 19,
  },
  checked: {},
  track: {},
})(Switch);
