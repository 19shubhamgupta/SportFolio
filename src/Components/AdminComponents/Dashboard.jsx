import React from "react";
import EventList from "../EventList";

function Dashboard() {
  return (
    <div style={{ width: "1200px" }}>
      <h2 style={{ textAlign: "center" }}>Welcome , John doe</h2>
      <div
        className="d-flex justify-content-center gap-5 mt-5"
        style={{ marginLeft: "2.75vw" }}
      >
        {/* Card for Total Participants */}
        <div
          className="card text-center"
          style={{
            width: "35rem",
            height: "13rem",
            backgroundColor: "#FFD700",
          }}
        >
          <div className="card-body">
            <h3
              className="card-title text-lg-start"
              style={{ fontWeight: "bold" }}
            >
              Total Participants
            </h3>
            <p
              className="card-text"
              style={{ fontSize: "5rem", fontWeight: "bold" }}
            >
              120
            </p>
          </div>
        </div>

        {/* Card for Total Events Organized */}
        <div
          className="card text-center"
          style={{
            width: "35rem",
            height: "13rem",
            backgroundColor: "#FFD700",
          }}
        >
          <div className="card-body">
            <h3
              className="card-title text-lg-start"
              style={{ fontWeight: "bold" }}
            >
              Total Events Organized
            </h3>
            <p
              className="card-text"
              style={{ fontSize: "5rem", fontWeight: "bold" }}
            >
              15
            </p>
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: "20px" , fontWeight: "bold"  }}>Upcoming Events</h2>
      <EventList />
      <h2 style={{ marginTop: "20px" ,fontWeight: "bold" }}>All Events</h2>
      <EventList />

    </div>
  );
}

export default Dashboard;
