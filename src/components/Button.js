import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      backgroundColor: "#1877f2",
      border: "none",
      borderRadius: "6px",
      fontSize: "15px",
      lineHeight: "40px",
      padding: "0 12px",
      marginTop: "10px",
      color: "white",
    },
  },
}));

export default function PrimaryButtons({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.button} variant="contained" fullWidth>
        {children}
      </Button>
    </div>
  );
}
