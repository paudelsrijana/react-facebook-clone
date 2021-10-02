import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));
const Input = ({ inputText }) => {
  const classes = useStyles();
  return (
    <Box>
      <TextField
        className={classes.textField}
        variant="outlined"
        placeholder={inputText}
        fullWidth
      />
    </Box>
  );
};
export default Input;
