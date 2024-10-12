import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import EventCard from "./Components/EventCard";
import ProfileForm from "./Components/ProfileForm";
import  Profile from "./Components/Profile"
import MyEvent from "./Components/MyEvent";
import StarredEvents from "./Components/StarredEvents";
import { Outlet } from "react-router-dom";

function App() {
  const participantTabValue = [
    {
      name: "Home",
      icon: "bi-house",
      slug : "/"
    },
    // {
    //   name: "Events",
    //   icon: "bi-flag",
    //   slug : "/events"
    // },
    {
      name: "My Events",
      icon: "bi-calendar-check",
      slug : "/my-events"
    },
    {
      name: "Starred",
      icon: "bi-star",
      slug : "/starred-events"
    },
    {
      name: "Profile",
      icon: "bi-person",
      slug : "/profile"
    },
  ];

  const organiserTabValue = [
    { name: "Dashboard", icon: "bi-clipboard-data" , slug : "/dashboard"  },
    // { name: "Events", icon: "bi-calendar" },
    { name: "Organize Events", icon: "bi-calendar-plus" , slug : "/organizeEvent" },
    { name: "Profile", icon: "bi-person-circle" , slug : "/organizer-profile" },
  ];

  return (
    <>
      <div className="d-flex">
        <Sidebar tabValue={organiserTabValue} />
        <div className="flex-grow-1 p-3">
          <Outlet/>
          
        </div>
      </div>
    </>
  );
}

export default App;
