import { Avatar, makeStyles } from "@material-ui/core";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import dadip from "../../src/image/dadip.jpg";
import siru from "../../src/image/siru.jpg";
import ramesh from "../../src/image/ramesh.jpg";
import sujata from "../../src/image/sujata.jpg";
import tilak from "../../src/image/tilak.jpg";
import kanxo from "../../src/image/kanxo.jpg";
import oln from "../../src/image/oln.jpg";

const useStyles = makeStyles((theme) => ({
  RightSideBar: {
    margin: "5px 30px 30px 30px",
  },
  friendRequests: {
    width: "250px",
    marginLeft: "20px",
    marginBottom: "20px",
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
      color: "gray",
      marginBottom: "5px",
    },
  },
  pageDetails: {
    display: "flex",
    "& h5": {
      margin: "0",
      marginTop: "7px",
      marginLeft: "4px",
      padding: "0",
    },
  },
  contactDetails: {
    display: "flex",
    marginTop: "10px",
    "& h5": {
      margin: "0",
      marginTop: "7px",
      marginLeft: "4px",
      padding: "0",
    },
  },
  notifications: {
    display: "flex",
    marginLeft: "25px",
    "& h6": {
      margin: "0",
      marginLeft: "5px",
      fontSize: "15px",
      color: "gray",
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
          <Avatar src={dadip} />
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
        <BsThreeDots
          style={{ fontSize: 20, marginLeft: "80px", marginTop: "7px" }}
        />
      </div>
      <div className={classes.pageDetails}>
        <Avatar src={oln} style={{ height: "30px", width: "30px" }} />
        <h5>Online Lectures in Nepali</h5>
      </div>
      <div className={classes.notifications}>
        <IoMdNotificationsOutline style={{ fontSize: "25" }} />
        <h6>2 Notifications</h6>
      </div>
      <div className={classes.notifications}>
        <HiOutlineSpeakerphone style={{ fontSize: "25" }} />
        <h6>Create Promotion</h6>
      </div>
    </div>
  );
};
const contactDetails = [
  { image: sujata, name: "Sujata Adhikari" },
  { image: siru, name: "Srijana Paudel" },
  { image: ramesh, name: "Ramesh Syangtan" },
  { image: tilak, name: "Tilak Kc" },
  { image: kanxo, name: "Samikshya Paudel" },
  { image: sujata, name: "Sujata Adhikari" },
  { image: siru, name: "Srijana Paudel" },
  { image: ramesh, name: "Ramesh Syangtan" },
  { image: tilak, name: "Tilak Kc" },
  { image: kanxo, name: "Samikshya Paudel" },
  { image: sujata, name: "Sujata Adhikari" },
];
const Contacts = () => {
  const classes = useStyles();
  return (
    <div className={classes.yourPages}>
      <div className={classes.pageHeader}>
        <h5>Contacts</h5>
        <BiVideoPlus
          style={{ fontSize: 20, marginLeft: "50px", marginTop: "7px" }}
        />
        <AiOutlineSearch
          style={{ fontSize: 20, marginLeft: "10px", marginTop: "7px" }}
        />
        <BsThreeDots
          style={{ fontSize: 20, marginLeft: "10px", marginTop: "7px" }}
        />
      </div>
      {contactDetails.map((item) => {
        return (
          <div className={classes.contactDetails}>
            <Avatar
              src={item.image}
              style={{ height: "30px", width: "30px" }}
            />
            <h5>{item.name}</h5>
          </div>
        );
      })}
    </div>
  );
};
export default function RightSideBar() {
  const classes = useStyles();
  return (
    <div
      className={classes.RightSideBar}
      style={{ height: "540px", overflowY: "scroll" }}
    >
      <FriendRequests />
      <hr style={{ width: "250px", marginLeft: "20px" }} />
      <YourPages />
      <hr style={{ width: "250px", marginLeft: "20px" }} />
      <Contacts />
    </div>
  );
}
