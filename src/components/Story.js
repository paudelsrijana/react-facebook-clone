import { Avatar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { GrAdd } from "react-icons/gr";
import sujata from "../../src/image/sujata.jpg";
import nawe from "../../src/image/nawe.jpg";
import ramesh from "../../src/image/ramesh.jpg";
import tilak from "../../src/image/tilak.jpg";
import nawaraj from "../../src/image/nawaraj.jpg";

const useStyles = makeStyles((theme) => ({
  userStoryImage: {
    height: "180px",
    width: "115px",
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxShadow: "0 3px 6px rgb(148, 122, 122)",

    borderRadius: "10%",
    cursor: "pointer",
    "& h4": {
      marginLeft: " 5px",
      position: "absolute",
      bottom: "0",
      left: "0",
      color: "#fafbfa",
      backgroundColor: "#f4d0d017",
      marginBottom: "3px",
    },
  },
  userProfileIcon: {
    border: "5px solid #1877f2",
    marginLeft: "5px",
    marginTop: "5px",
  },
  storyFeedContainer: {
    width: "100%",
    display: "flex",
    padding: "20px 0px 0px",
    gap: "10px",
  },

  addIcon: {
    position: "absolute",
    left: "35%",
    bottom: "40px",
    color: "white",
    backgroundColor: "#1876f2",
    width: "32px",
    borderRadius: "50%",
    border: "5px solid white",
  },
  myStoryImage: {
    backgroundSize: "135px",
    position: "relative",
  },
  myStoryText: {
    backgroundColor: "white",

    "& h4": {
      color: "black",
      position: "absolute",
      top: "125px",
      left: "8px",
    },
  },
}));
const storyData = [
  {
    profileImage: sujata,
    userStoryImage: sujata,
    title: "Sujata Adhikari",
  },
  {
    profileImage: nawe,
    userStoryImage: nawaraj,
    title: "Nawaraj Bhandary",
  },
  {
    profileImage: ramesh,
    userStoryImage: ramesh,
    title: "Ramesh Syangtyan",
  },
  {
    profileImage: tilak,
    userStoryImage: tilak,
    title: "Tilak Kc",
  },
];
function Story({ profileImage, userStoryImage, title }) {
  const classes = useStyles();
  return (
    <div
      style={{ backgroundImage: `url(${userStoryImage})` }}
      className={classes.userStoryImage}
    >
      <Avatar className={classes.userProfileIcon} src={profileImage} />
      <h4>{title}</h4>
    </div>
  );
}

function StoryFeed() {
  const classes = useStyles();
  return (
    <div className={classes.storyFeedContainer}>
      <div
        style={{
          backgroundImage: `url("https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/247955429_1022243378344285_470969932257342667_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bSUMR9lXBN8AX_ueBcC&_nc_ht=scontent.fktm1-1.fna&oh=bdc7d71ea344d28706f125065106a70a&oe=619D7EFE")`,
        }}
        className={`${classes.userStoryImage} ${classes.myStoryImage}`}
      >
        <div className={classes.addIcon}>
          <GrAdd style={{ fontSize: 30 }} />
        </div>
        <div className={classes.myStoryText}>
          <h4>Create story</h4>
        </div>
      </div>
      {storyData.map((item) => {
        return (
          <Story
            profileImage={item.profileImage}
            userStoryImage={item.userStoryImage}
            title={item.title}
          />
        );
      })}
    </div>
  );
}

export default StoryFeed;
