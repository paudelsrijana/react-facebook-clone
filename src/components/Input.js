import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));
const Input = ({ inputText, ...rest }) => {
  const classes = useStyles();
  return (
    <Box>
      <TextField
        className={classes.textField}
        id="outlined-size-normal"
        variant="outlined"
        size="small"
        placeholder={inputText}
        fullWidth
        {...rest}
      />
    </Box>
  );
};
export default Input;
