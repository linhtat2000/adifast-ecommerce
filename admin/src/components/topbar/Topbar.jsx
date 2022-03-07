import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="left">
          <span className="logo">octoadmin</span>
        </div>
        <div className="right">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="" alt="avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
