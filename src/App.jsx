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

function App() {
  const participantTabValue = [
    {
      name: "Home",
      icon: "bi-house",
    },
    {
      name: "Events",
      icon: "bi-flag",
    },
    {
      name: "My Events",
      icon: "bi-calendar-check",
    },
    {
      name: "Starred",
      icon: "bi-star",
    },
    {
      name: "Profile",
      icon: "bi-person",
    },
  ];

  const organiserTabValue = [
    { name: "Dashboard", icon: "bi-clipboard-data" },
    { name: "Events", icon: "bi-calendar" },
    { name: "Organize Events", icon: "bi-calendar-plus" },
    { name: "Profile", icon: "bi-person-circle" },
  ];

  return (
    <>
      <div className="d-flex">
        <Sidebar tabValue={participantTabValue} />
        <div className="flex-grow-1 p-3">
          <ProfileForm/>
          
        </div>
      </div>
    </>
  );
}

export default App;
