import React from "react";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    boxShadow: "0 3px 6px rgb(148, 122, 122)",
    display: "flex",
    flexDirection: "column",
    marginTop: "25px",
    backgroundColor: "white",
    borderRadius: "10px",
    width: "100%",
  },
  containerTop: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    "& form": {
      "& input": {
        outlineWidth: "0",
        width: "400px",
        border: "none",
        padding: "12px 20px",
        margin: "0 10px",
        borderRadius: "999px",
        backgroundColor: "#eff2f5",
      },
    },
  },
  containerBottom: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  postOption: {
    display: "flex",
    marginBottom: "10px",
    "& h4": {
      color: "gray",
      fontWeight: "400",
      fontSize: "15px",
      margin: "0",
    },
  },
}));
const AddPost = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.containerTop}>
        <Avatar src="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-9/246866638_1022243411677615_5604781981576824806_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=n9TZ7wj-JAcAX8f4k_c&_nc_ht=scontent.fpkr2-1.fna&oh=490d0b223fdbfc4a0ebf395378b3c320&oe=619700DF" />
        <form>
          <input className="status" placeholder="What's on your mind ?" />
        </form>
      </div>
      <hr width="500px" />
      <div className={classes.containerBottom}>
        <div className={classes.postOption}>
          <VideocamIcon style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>
        <div className={classes.postOption}>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h4>Photo/video</h4>
        </div>
        <div className={classes.postOption}>
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h4>Felling/activity</h4>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
