import LeftSidebarElement from "./LeftSidebarElement.js";
import { FaGift } from "react-icons/fa";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import {
  FcAlarmClock,
  FcCalendar,
  FcConferenceCall,
  FcSalesPerformance,
  FcLike,
} from "react-icons/fc";
import PeopleIcon from "@material-ui/icons/People";
import { makeStyles } from "@material-ui/core";
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
      <LeftSidebarElement
        src="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-9/246866638_1022243411677615_5604781981576824806_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=n9TZ7wj-JAcAX8f4k_c&_nc_ht=scontent.fpkr2-1.fna&oh=490d0b223fdbfc4a0ebf395378b3c320&oe=619700DF"
        title="Srîjânâ Pâûđêł"
      />
      <LeftSidebarElement Icon={PeopleIcon} title="Friends" />
      <LeftSidebarElement Icon={FcCalendar} title="Events" />
      <LeftSidebarElement Icon={FcConferenceCall} title="Groups" />
      <LeftSidebarElement Icon={FaGift} title="Marketplace" />
      <LeftSidebarElement Icon={OndemandVideoIcon} title="Watch" />
      <LeftSidebarElement Icon={FcAlarmClock} title="Memories" />
      <LeftSidebarElement Icon={FcSalesPerformance} title="Ads" />
      <LeftSidebarElement Icon={FcLike} title="Fundraisers" />
    </div>
  );
}
