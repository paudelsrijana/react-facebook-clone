import LeftSidebarElement from "./LeftSidebarElement.js";
import { FaGift } from "react-icons/fa";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import { FcCalendar, FcConferenceCall } from "react-icons/fc";
import PeopleIcon from "@material-ui/icons/People";
import { makeStyles } from "@material-ui/core";
import siru from "../../src/image/siru.jpg";

const useStyles = makeStyles((theme) => ({
  LeftSideBar: {
    width: "100%",
    marginLeft: "5px",
    display: "flex",
    flexDirection: "column",
  },
}));
export default function LeftSideBar() {
  const classes = useStyles();
  return (
    <div className={classes.LeftSideBar}>
      <LeftSidebarElement src={siru} title="Srîjânâ Pâûđêł" />
      <LeftSidebarElement
        Icon={<PeopleIcon style={{ fontSize: "25", color: "blue" }} />}
        title="Friends"
      />
      <LeftSidebarElement
        Icon={<FcCalendar style={{ fontSize: "25" }} />}
        title="Events"
      />
      <LeftSidebarElement
        Icon={<FcConferenceCall style={{ fontSize: "25" }} />}
        title="Groups"
      />
      <LeftSidebarElement
        Icon={<FaGift style={{ fontSize: "25", color: "blue" }} />}
        title="Marketplace"
      />
      <LeftSidebarElement
        Icon={<OndemandVideoIcon style={{ fontSize: "25", color: "blue" }} />}
        title="Watch"
      />
      {/* <LeftSidebarElement
        Icon={<FcAlarmClock style={{ fontSize: "25" }} />}
        title="Memories"
      />
      <LeftSidebarElement
        Icon={<FcSalesPerformance style={{ fontSize: "25" }} />}
        title="Ads"
      />
      <LeftSidebarElement
        Icon={<FcLike style={{ fontSize: "25" }} />}
        title="Fundraisers"
      /> */}
    </div>
  );
}
