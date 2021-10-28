import { Avatar, makeStyles } from "@material-ui/core";

import { FaUserFriends } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  RightSideBar: {
    width: "100%",
    margin: "30px",
    marginLeft: "20px",
  },
  friendRequests: {
    width: "250px",
    marginLeft: "40px",
    boxShadow: "0 3px 6px rgb(148, 122, 122)",
    border: "2px solid transparent",
    borderRadius: "10%",
  },
  requestHeader: {
    display: "flex",
    flex: "1",
    margin: "10px 0px",
  },
  requestDetails: {
    margin: "5px ",
    display: "flex",
  },
  name: {
    display: "flex",
    flexDirection: "row",
  },
  requestRight: {
    display: "flex",
    flexDirection: "column",
    "& button": {
      width: "100px",
      borderRadius: "10%",
      border: "2px solid transparent",
      padding: "5px",
      marginBottom: "5px",
    },
  },
  confirm: {
    backgroundColor: "#1877f2",
    color: "white",
    marginTop: "7px",
  },
  delete: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    color: "black",
  },
  yourPages: {
    marginLeft: "40px",
  },
  pageHeader: {
    display: "flex",
    "& h5": {
      margin: "0",
      padding: "0",
      fontSize: "20px",
    },
  },
}));
const FriendRequests = () => {
  const classes = useStyles();
  return (
    <div className={classes.friendRequests}>
      <div className={classes.requestHeader}>
        <FaUserFriends style={{ fontSize: 20, width: "40%" }} />
        <h5 style={{ width: "100%", padding: "0", margin: "0" }}>
          Friend Requests
        </h5>
        <BsThreeDots style={{ fontSize: 20, width: "40%" }} />
      </div>
      <div className={classes.requestDetails}>
        <div width="30%">
          <Avatar src="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-9/248800785_145606747791108_7115195208120570965_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=S9OtTqd-On8AX8dWQ_H&_nc_ht=scontent.fpkr2-1.fna&oh=4165c61e8091d4d0dc9faa44b5b41d13&oe=619F4BA0" />
        </div>
        <div className={classes.requestRight}>
          <div className={classes.acceptRequest} width="100%">
            <div className={classes.name}>
              <h5
                style={{
                  width: "100%",
                  padding: "0",
                  margin: "0",
                  marginLeft: "20px",
                }}
              >
                Dadip Bhattarai
              </h5>
              <p
                style={{
                  width: "15%",
                  padding: "0",
                  margin: "0",
                  fontSize: "15px",
                  color: "gray",
                  marginLeft: "10px",
                }}
              >
                6d
              </p>
            </div>
          </div>
          <div>
            <button className={classes.confirm}>Confirm</button>
          </div>
          <div>
            <button className={classes.delete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const YourPages = () => {
  const classes = useStyles();
  return (
    <div className={classes.yourPages}>
      <div className={classes.pageHeader}>
        <h5>Your Pages</h5>
        <BsThreeDots style={{ fontSize: 20, width: "40%" }} />
      </div>
    </div>
  );
};
export default function RightSideBar() {
  const classes = useStyles();
  return (
    <div className={classes.RightSideBar}>
      <FriendRequests />
      <hr style={{ width: "280px", marginLeft: "30px" }} />
      <YourPages />
    </div>
  );
}
