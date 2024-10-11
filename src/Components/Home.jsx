import React from "react";
import EventList from "./EventList";
function Home() {
  const sportsCategories = [
    {
      name: "Cricket",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/91/Cricket_%28icon%29.svg",
    },
    {
      name: "Football",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Soccer_ball_icon.svg/1200px-Soccer_ball_icon.svg.png",
    },
    {
      name: "Chess",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Chess_piece_-_King.png/800px-Chess_piece_-_King.png",
    },
    {
      name: "Kabaddi",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kabaddi_icon.svg/1200px-Kabaddi_icon.svg.png",
    },
    {
      name: "Badminton",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Badminton_racket.svg/1200px-Badminton_racket.svg.png",
    },
    {
      name: "Basketball",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Basketball.png/800px-Basketball.png",
    },
    {
      name: "Volleyball",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Volleyball.svg/1200px-Volleyball.svg.png",
    },
    {
      name: "Hockey",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Ice_hockey_puck_2.svg/1200px-Ice_hockey_puck_2.svg.png",
    },
    {
      name: "Table Tennis",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Table_Tennis_pictogram.svg/1200px-Table_Tennis_pictogram.svg.png",
    },
  ];

  return (
    <>
      <p className=" text-dark fs-1 ">Explore Sports</p>
      <div className="container text-center mt-4">
        <div
          className="row justify-content-center"
          style={{ marginLeft: "42px" }}
        >
          {sportsCategories.map((sport, index) => (
            <div className="col-auto" key={index}>
              <div
                className="rounded-circle border border d-flex align-items-center justify-content-center mb-2"
                style={{ width: "100px", height: "100px", overflow: "hidden" }}
              >
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="img-fluid"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
              <h6 className="text">{sport.name}</h6>
            </div>
          ))}
        </div>
      </div>
      <h2 style={{ marginTop: "20px" }}>Recommended Just for you</h2>
      <EventList />
      <h2 style={{ marginTop: "20px" }}>Popular Sports Events</h2>
      <EventList />
      <h2 style={{ marginTop: "20px" }}>Upcoming Sports Events</h2>
      <EventList />
    </>
  );
}

export default Home;
