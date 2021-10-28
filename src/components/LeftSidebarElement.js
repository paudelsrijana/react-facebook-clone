import React from "react";

import { Avatar, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  leftSidebar: {
    display: "flex",
    alignItems: "center",
    margin: "0px 5px",
    marginTop: "5px",
    padding: " 0 5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.15)",
      borderRadius: "15px",
    },
    "& p": {
      marginLeft: "10px",
      fontSize: "16px",
      fontWeight: "500",
    },
  },
}));
export default function LeftSidebarElement({ src, Icon, title }) {
  const classes = useStyles();
  return (
    <div className={classes.leftSidebar}>
      {src && <Avatar src={src} />}
      {Icon}
      <p>{title}</p>
    </div>
  );
}
