import { makeStyles } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { GiLobArrow } from "react-icons/gi";
import siru from "../../src/image/siru.jpg";
import like from "../../src/image/like.png";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "600px",
    boxShadow: "0 3px 6px rgb(148, 122, 122)",
    marginTop: "15px",
    backgroundColor: "white",
    borderRadius: "3%",
    marginBottom: "10px",
    marginLeft: "5px",
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
    marginLeft: "  5px",
  },
  postImage: {
    marginTop: "10px",
  },
  footer: {
    padding: "0px",
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
    height: "20px",
    width: "20px",
    margin: "10px 0",
    "& p": {
      marign: "0",
      marginLeft: "10px",
    },
    "&:hover": {
      backgroundColor: "#efefef",
      borderRadius: "10px",
    },
  },
  containerTopp: {
    display: "flex",
    alignItems: "center",
    padding: "0 10px 10px 10px",
    "& form": {
      "& input": {
        outlineWidth: "0",
        width: "450px",
        border: "none",
        padding: "12px 20px",
        margin: "0 10px",
        borderRadius: "999px",
        backgroundColor: "#eff2f5",
      },
    },
  },
  reactCountContainer: {
    marginLeft: "10px",
    display: "flex",
    height: "30px",
    "& img": {
      height: "20px",
      width: "20px",
    },
  },
}));
const postDetails = [
  {
    imageUrl:
      "https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-1/c0.0.320.320a/p320x320/245786494_1615311848807910_8877039673184462069_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=CA5mGq5Ev2sAX89grkC&_nc_ht=scontent.fpkr2-1.fna&oh=00e9426de6e002e67075074824c259dc&oe=61801123",
    name: "Samikshya Paudel",
    caption:
      "“Where there is no struggle, there is no strength.” -Oprah Winfrey",
    postImage:
      "https://th.bing.com/th/id/OIP._zvg82wJ4y2kGOUW7XOngQHaEK?pid=ImgDet&rs=1",
    likeCount: "20",
  },
  {
    imageUrl:
      "https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-1/c0.0.320.320a/p320x320/245786494_1615311848807910_8877039673184462069_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=CA5mGq5Ev2sAX89grkC&_nc_ht=scontent.fpkr2-1.fna&oh=00e9426de6e002e67075074824c259dc&oe=61801123",
    name: "Samikshya Paudel",
    caption:
      "“Where there is no struggle, there is no strength.” -Oprah Winfrey",
    postImage:
      "https://th.bing.com/th/id/OIP._zvg82wJ4y2kGOUW7XOngQHaEK?pid=ImgDet&rs=1",
    likeCount: "20",
  },
  {
    imageUrl:
      "https://scontent.fpkr2-1.fna.fbcdn.net/v/t39.30808-1/c0.0.320.320a/p320x320/245786494_1615311848807910_8877039673184462069_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=CA5mGq5Ev2sAX89grkC&_nc_ht=scontent.fpkr2-1.fna&oh=00e9426de6e002e67075074824c259dc&oe=61801123",
    name: "Samikshya Paudel",
    caption:
      "“Where there is no struggle, there is no strength.” -Oprah Winfrey",
    postImage:
      "https://th.bing.com/th/id/OIP._zvg82wJ4y2kGOUW7XOngQHaEK?pid=ImgDet&rs=1",
    likeCount: "20",
  },
];
const Posts = ({ imageUrl, name, caption, postImage, likeCount }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.containerTOp}>
        <Avatar src={imageUrl} className={classes.usersProfile} />
        <div className={classes.usersInfo}>
          <h3>{name} </h3>
        </div>
      </div>
      <div className={classes.containerBottom}>{caption}</div>
      <div className={classes.postImage}>
        <img src={postImage} alt="logo" width="600" />
      </div>
      <div className={classes.reactCountContainer}>
        <div className={classes.reactImage}>
          <img src={like} alt="like" />
        </div>
        <div className={classes.reactCount}>{likeCount}</div>
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
          <GiLobArrow style={{ fontSize: "25" }} />
          <p>Share</p>
        </div>
      </div>
      <div className={classes.containerTopp}>
        <Avatar src={siru} />
        <form>
          <input className="comment" placeholder="Write a comment ..." />
        </form>
      </div>
    </div>
  );
};

export default function OthersPosts() {
  return (
    <div>
      {postDetails.map((item) => {
        return (
          <Posts
            imageUrl={item.imageUrl}
            name={item.name}
            caption={item.caption}
            postImage={item.postImage}
            likeCount={item.likeCount}
          />
        );
      })}
    </div>
  );
}
