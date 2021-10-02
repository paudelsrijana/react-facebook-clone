import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "10px",
    marginBottom: "10px",
    width: "90%",
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
      />
    </Box>
  );
};
export default Input;
