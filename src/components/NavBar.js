import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  navbar: {
    padding: "5px 10px",
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
    "& input": {
      border: "none",
      backgroundColor: "transparent",
      outlineWidth: "0",
    },
  },

  centerOfNavbar: {
    display: "flex",
    flex: "1",
    justifyContent: "center",
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
          <input type="text" />
        </div>
      </div>
      <div className={classes.centerOfNavbar}>
        <div className={classes.homeIcon}>
          <HomeIcon style={{ fontSize: 40 }} />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
