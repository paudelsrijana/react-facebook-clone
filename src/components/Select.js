import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    marginLeft: "0",
    width: "140px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({ text }) {
  const classes = useStyles();
  return (
    <div>
      <FormControl
        className={classes.formControl}
        variant="outlined"
        size="small"
      >
        <InputLabel>{text}</InputLabel>
        <Select placeholder={text}>
          <MenuItem>January </MenuItem>
          <MenuItem>February</MenuItem>
          <MenuItem>March</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
