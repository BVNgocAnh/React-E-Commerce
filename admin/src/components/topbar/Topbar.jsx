import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CAVA admin</span>
        </div>
        <div className="topRight">
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
          <img
            src="https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/292210900_1388242474989999_9150660370707905097_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QMrtpZtTP-YAX89mlL8&_nc_ht=scontent.fvca1-1.fna&oh=00_AfBhn0s-MK5ykuZEkPk7EEbgNFTpTYh6RDDGS2EyzQP3uQ&oe=638FF835"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
