import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor: "#42b72a",
      border: "none",
      borderRadius: "6px",
      fontSize: "17px",
      lineHeight: "48px",
      padding: "0 16px",
      color: "white",
    },
  },
}));

export default function SecondaryButtons({ children, ...rest }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.button} variant="contained" {...rest}>
        {children}
      </Button>
    </div>
  );
}
