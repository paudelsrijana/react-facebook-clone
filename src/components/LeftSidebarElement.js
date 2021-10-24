import React from "react";

import { Avatar, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  leftSidebar: {
    display: "flex",
    alignItems: "center",
    margin: "5px 5px",
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
  icons: {
    fontSize: "20px",
    color: "#7cdcf2",
  },
}));
export default function LeftSidebarElement({ src, Icon, title }) {
  const classes = useStyles();
  return (
    <div className={classes.leftSidebar}>
      {src && <Avatar src={src} />}
      {Icon && <Icon className={classes.icons} />}
      <p>{title}</p>
    </div>
  );
}
