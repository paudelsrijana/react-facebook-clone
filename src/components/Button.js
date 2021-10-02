import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      backgroundColor: "#1877f2",
      border: "none",
      borderRadius: "6px",
      fontSize: "20px",
      lineHeight: "48px",
      padding: "0 16px",
      width: "400px",
      color: "white",
      margin: "10px",
    },
  },
}));

export default function PrimaryButtons({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.button} variant="contained">
        {children}
      </Button>
    </div>
  );
}
