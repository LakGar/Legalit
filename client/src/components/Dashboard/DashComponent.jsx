import React, { useEffect } from "react";
import "./DashComponent.css";
import Greeting from "./Greeting";
import Topnav from "./Topnav";
import Widgets from "./Widgets";
import FileList from "./FileList";
import RecentFiles from "./RecentFiles";

const DashComponent = ({ user }) => {
  return (
    <div className="dash-component-container ">
      <Topnav user={user} />
      <div className="dash-component ">
        <Greeting name={user.firstname} />
        <Widgets />
        <RecentFiles user={user} />
        <FileList user={user} />
      </div>
    </div>
  );
};

export default DashComponent;