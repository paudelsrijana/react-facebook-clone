import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginLeft: "0",
    minWidth: 197,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({ text }) {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{text}</InputLabel>
        <Select id="demo-simple-select" variant="outlined" placeholder={text}>
          <MenuItem>January </MenuItem>
          <MenuItem>February</MenuItem>
          <MenuItem>March</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
