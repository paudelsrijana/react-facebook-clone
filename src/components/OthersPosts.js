import { makeStyles } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import GiLobArrow from "react-icons/gi";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    boxShadow: "0 3px 6px rgb(148, 122, 122)",
    marginTop: "15px",
    backgroundColor: "white",
    borderRadius: "3%",
    marginBottom: "10px",
  },
  containerTOp: {
    display: "flex",
    position: "relative",
    paddingTop: "10px ",
    paddingBottom: "0",
    paddingLeft: "10px",
    "& h3": {
      fontSize: "medium",
      fontWeight: "600",
      marginTop: "10px",
    },
    "& h4": {
      fontSize: "small",
      fontWeight: "400",
    },
  },
  usersProfile: {
    marginLeft: "15px",
    marginRight: "10px",
  },
  containerBottom: {
    "& p": {
      marginTop: "0",
      paddingTop: "0",
    },
  },
  footer: {
    padding: "5px",
    display: "flex",
    justifyContent: "space-evenly",
    borderTop: "1px solid #efefef",
    fontSize: "medium",
    color: "gray",
    cursor: "pointer",
  },
  footerOption: {
    display: "flex",
    alignItems: "center",
    "& p": {
      marign: "0",
      marginLeft: "10px",
    },
    "&:hover": {
      backgroundColor: "#efefef",
      borderRadius: "10px",
    },
  },
  usersInfo: {
    display: "flex",
    "& p": {
      marginLeft: "300px",
    },
    postImage: {
      "& img": {
        width: "500px",
      },
    },
  },
}));
const OthersPosts = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.containerTOp}>
        <Avatar
          src="https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-1/c0.0.320.320a/p320x320/245786494_1615311848807910_8877039673184462069_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=CA5mGq5Ev2sAX89grkC&_nc_ht=scontent.fpkr2-1.fna&oh=00e9426de6e002e67075074824c259dc&oe=61801123"
          className={classes.usersProfile}
        />
        <div className={classes.usersInfo}>
          <h3>Samikshya Paudel </h3>
          <p>2h ago</p>
        </div>
      </div>
      <div className={classes.containerBottom}>
        <p>
          “Where there is no struggle, there is no strength.” -Oprah Winfrey
        </p>
      </div>
      <div className={classes.postImage}>
        <img
          src="https://th.bing.com/th/id/OIP._zvg82wJ4y2kGOUW7XOngQHaEK?pid=ImgDet&rs=1"
          alt="logo"
        />
      </div>

      <div className={classes.footer}>
        <div className={classes.footerOption}>
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className={classes.footerOption}>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className={classes.footerOption}>
          <GiLobArrow />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default OthersPosts;
