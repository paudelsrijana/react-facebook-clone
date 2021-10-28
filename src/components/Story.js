import { Avatar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { GrAdd } from "react-icons/gr";
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
          backgroundImage: `url("https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-9/246866638_1022243411677615_5604781981576824806_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=n9TZ7wj-JAcAX8f4k_c&_nc_ht=scontent.fpkr2-1.fna&oh=490d0b223fdbfc4a0ebf395378b3c320&oe=619700DF")`,
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
      <Story
        profileImage="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-9/247140387_408588610863137_3345303757333182293_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=maxjCJbID0EAX-riV6A&_nc_ht=scontent.fpkr2-1.fna&oh=5b8016847b417a658c9c3abb962da3ae&oe=61A02508"
        userStoryImage="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-9/247140387_408588610863137_3345303757333182293_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=maxjCJbID0EAX-riV6A&_nc_ht=scontent.fpkr2-1.fna&oh=5b8016847b417a658c9c3abb962da3ae&oe=61A02508"
        title="Sujata Adhikari"
      />
      <Story
        profileImage="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-9/57935954_1271463909689124_7090610707816775680_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Fb3caEpA7awAX-GAeNO&_nc_ht=scontent.fpkr2-1.fna&oh=e5a584ac4b5d6a3059694285690f4449&oe=619E4D97"
        userStoryImage="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-9/57935954_1271463909689124_7090610707816775680_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Fb3caEpA7awAX-GAeNO&_nc_ht=scontent.fpkr2-1.fna&oh=e5a584ac4b5d6a3059694285690f4449&oe=619E4D97"
        title="Ramesh Syangtan"
      />
      <Story
        profileImage="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nuamIPF3N90AX_BZZHz&_nc_ht=scontent.fpkr2-1.fna&oh=ac548804a059b5bd156a26efb93ed468&oe=619E7148"
        userStoryImage="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nuamIPF3N90AX_BZZHz&_nc_ht=scontent.fpkr2-1.fna&oh=ac548804a059b5bd156a26efb93ed468&oe=619E7148"
        title="Nawaraj Bhandary"
      />
      <Story
        profileImage="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-9/243158176_2974894346098233_2846066208134429147_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-iW3gRrNbdcAX9rzbPt&tn=i6y934-hUdcy2mEP&_nc_ht=scontent.fpkr2-1.fna&oh=634d94d52520f2e2c8fa955999a76d40&oe=619F5A28"
        userStoryImage="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-9/243158176_2974894346098233_2846066208134429147_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-iW3gRrNbdcAX9rzbPt&tn=i6y934-hUdcy2mEP&_nc_ht=scontent.fpkr2-1.fna&oh=634d94d52520f2e2c8fa955999a76d40&oe=619F5A28"
        title="Tilak Kc"
      />
    </div>
  );
}

export default StoryFeed;
