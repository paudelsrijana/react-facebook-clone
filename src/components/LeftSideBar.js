import LeftSidebarElement from "./LeftSidebarElement.js";
import { FcCalendar, FcConferenceCall } from "react-icons/fc";
import { makeStyles } from "@material-ui/core";
import siru from "../../src/image/siru.jpg";
import groups from "../../src/image/groups.png";
import memories from "../../src/image/memories.png";
import pages from "../../src/image/pages.png";
import covid from "../../src/image/covid.png";
import blood from "../../src/image/blood.png";
import ads from "../../src/image/ads.png";
import messengerkids from "../../src/image/messengerkids.png";
import "./middle.css";
const useStyles = makeStyles((theme) => ({
  leftSideBar: {
    marginLeft: "5px",
    display: "flex",
    flexDirection: "column",
    marginRight: "10px",
  },
}));
export default function LeftSideBar() {
  const classes = useStyles();
  return (
    <div
      className={classes.leftSideBar}
      style={{ height: "540px", overflowY: "scroll" }}
    >
      <LeftSidebarElement src={siru} title="Srîjânâ Pâûđêł" />
      <LeftSidebarElement src={groups} title="Friends" />
      <LeftSidebarElement src={memories} title="Memories" />
      <LeftSidebarElement src={pages} title="Pages" />
      <LeftSidebarElement src={ads} title="Ads" />
      <LeftSidebarElement src={covid} title="Covid-19 Information Center" />
      <LeftSidebarElement src={blood} title="Fundraisers" />
      <LeftSidebarElement src={siru} title="Srîjânâ Pâûđêł" />
      <LeftSidebarElement src={groups} title="Friends" />
      <LeftSidebarElement src={memories} title="Memories" />
      <LeftSidebarElement src={pages} title="Pages" />
      <LeftSidebarElement src={ads} title="Ads" />
      <LeftSidebarElement src={covid} title="Covid-19 Information Center" />
      <LeftSidebarElement src={blood} title="Fundraisers" />
      <LeftSidebarElement
        Icon={<FcCalendar style={{ fontSize: "25" }} />}
        title="Events"
      />
      <LeftSidebarElement
        Icon={<FcConferenceCall style={{ fontSize: "25" }} />}
        title="Groups"
      />
      <LeftSidebarElement src={messengerkids} title="Messenger Kids" />
    </div>
  );
}
