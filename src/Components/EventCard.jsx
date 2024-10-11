import React from "react";

function EventCard() {
  return (
    <>
      <div style={{ display: "flex", margin:"20px" }}>
        <div className="card" style={{ width: "21rem" }}>
          <img src="IMG_20211106_141540.jpg" className="card-img-top" alt="..." />
          <div className="card-body" style={{ height: "5rem" }}>
            <h5
              className="card-title text-center"
              style={{ margin: "2px", marginTop: "-14px" }}
            >
              Card title
            </h5>
            <p className="card-text" style={{ marginBottom: "0" }}>
              Some quick example text to build on the card title and make up the
            </p>
          </div>
          <div
            style={{
              height: "5rem",
              width: "21rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: "2vw",
              boxSizing: "border-box"
            }}
          >
            <div className="d-flex" style={{ flexDirection: "column" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "-14px" }}>Dec</div>
              <div style={{ fontSize: "2rem", fontWeight: "bold" }}>03</div>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ flexDirection: "column", marginLeft: "16px", marginBottom: "7px", fontSize: "1.2rem" }}>
              <div className="d-flex align-items-center" style={{ marginTop: "0.5rem" }}>
                <i className="bi bi-geo-alt me-2"></i>
                <span>Location</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-clock me-2"></i>
                <span> 10:00 AM - 12:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
