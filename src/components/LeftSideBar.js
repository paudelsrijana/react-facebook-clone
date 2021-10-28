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
import StoryFeed from "./Story.js";
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
