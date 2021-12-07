import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import { AiOutlineShop } from "react-icons/ai";
import { BsColumns, BsMessenger } from "react-icons/bs";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import siru from "../../src/image/siru.jpg";
const useStyles = makeStyles((theme) => ({
  navbar: {
    padding: "0px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: " #fff",
    position: "sticky",
    top: "0",
    boxShadow: "0px 5px 8px -9px rgba(0, 0, 0, 0.75)",
    zIndex: "100",
  },
  navbarLeftSide: {
    display: "flex",
  },
  searchInput: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: "700px",
    padding: "10px",
    marginLeft: "10px",
    color: "#828282",
    "& input": {
      border: "none",
      backgroundColor: "transparent",
      outlineWidth: "0",
    },
  },
  centerOfNavbar: {
    display: "flex",
    justifyContent: "center",
  },
  groups: {
    "& i": {
      border: "2px solid #CCCCCC",
      borderRadius: "50%",
      padding: "5px",
    },
  },
  navIcons: {
    color: "#828282",
    display: "flex",
    alignItems: "center",
    margin: "0px 52px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.15)",
      borderRadius: "40%",
    },
  },
  RightSideOfNavbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileIconOfUser: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginLeft: "20px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.15)",
      borderRadius: "700px",
    },
    "& h5": {
      margin: " 0 10px",
    },
  },
  rightNavIcons: {
    color: "black",
    display: "flex",
    height: "25px",
    width: "25px",
    padding: "5px",
    alignItems: "center",
    backgroundColor: "#e4e6eb",
    borderRadius: "50%",
    margin: "10px 5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.15)",
    },
  },
}));
const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLeftSide}>
        <div className={classes.navbarImage}>
          <img
            src="https://th.bing.com/th/id/AMMS_928a62c96ba821e882cb080907bbb897?pid=ImgDet&rs=1"
            alt="facebook-logo"
            height="40px"
          />
        </div>
        <div className={classes.searchInput}>
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className={classes.centerOfNavbar}>
        <div className={`${classes.navIcons} ${classes.home}`}>
          <HomeIcon style={{ fontSize: 28 }} />
        </div>
        <div className={`${classes.navIcons} ${classes.watch}`}>
          <OndemandVideoIcon style={{ fontSize: 27 }} />
        </div>
        <div className={`${classes.navIcons} ${classes.marketPlace}`}>
          <AiOutlineShop style={{ fontSize: 25 }} />
        </div>

        <div className={`${classes.navIcons} ${classes.groups}`}>
          <i class="fa fa-users" aria-hidden="true" style={{ fontSize: 20 }} />
        </div>
        <div className={`${classes.navIcons} ${classes.gaming}`}>
          <BsColumns style={{ fontSize: 22 }} />
        </div>
        <div className={classes.RightSideOfNavbar}>
          <div className={classes.profileIconOfUser}>
            <Avatar src={siru} />
            <h5>Srîjânâ </h5>
          </div>
        </div>
        <div className={`${classes.rightNavIcons} ${classes.menu}`}>
          <AppsIcon style={{ fontSize: 25 }} />
        </div>
        <div className={`${classes.rightNavIcons} ${classes.messanger}`}>
          <BsMessenger style={{ fontSize: 25 }} />
        </div>
        <div className={`${classes.rightNavIcons} ${classes.notification}`}>
          <NotificationsIcon style={{ fontSize: 25 }} />
        </div>
        <div className={`${classes.rightNavIcons} ${classes.account}`}>
          <ArrowDropDownCircleIcon style={{ fontSize: 25 }} />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
