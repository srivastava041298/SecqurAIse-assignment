import React from "react";
import "./Sidebar.css";
import { UilBars } from "@iconscout/react-unicons";
import { UilSignout } from "@iconscout/react-unicons";
function Sidebar() {
  return (
    <div className="sidebar">
      <UilBars  className="bar"/>
      <UilSignout  className="signout"/>
    </div>
  );
}
export default Sidebar;
