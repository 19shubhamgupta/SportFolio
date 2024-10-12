import React from "react";

const ProfilePage = () => {
  return (
   <>
    <div className="d-flex align-items-center justify-content-center mt-4 gap-5" style={{ width: "995px" }}>
  <div className="me-4">
    <img
      src="IMG_20211106_141540.jpg"
      alt="Profile Photo"
      className="rounded-circle"
      style={{ width: "150px", height: "150px", objectFit: "cover" }}
    />
  </div>
  <div style={{ marginLeft: "9vw" }}>
    <div className="d-flex align-items-center">
      <h2 style={{ marginBottom: "10px", marginRight: "10px" }}>John Doe</h2>
      <i
        className="bi bi-pencil-fill"
        style={{ fontSize: "19px", cursor: "pointer", color: "#e6f761" , marginLeft : "24px" }}
        title="Edit Name"
      ></i>
    </div>
    <p style={{ marginBottom: "5px" }}>
      <strong>Email:</strong> johndoe@gmail.com
    </p>
    <p style={{ marginBottom: "5px" }}>
      <strong>Sports:</strong> Basketball
    </p>
  </div>
</div>
<div className="d-flex align-items-center mt-4 gap-5" style={{ width: "995px", marginLeft: "5vw" }}>
  <div className="mt-3">
    <h2>Skills</h2>
    <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "21px" }}>
      <li>Dribbling</li>
      <li>Team Leadership</li>
      <li>Strategic Thinking</li>
      <li>Physical Endurance</li>
    </ul>
  </div>
</div>

<div className="d-flex align-items-center  gap-5" style={{ width: "995px",marginLeft : "5vw" }}>
<div className="mt-3">
  <h2>Achievements</h2>
  <ul style={{ listStyleType: "disc", paddingLeft: "20px" ,fontSize : "21px"}}>
    <li>Won the state basketball championship</li>
    <li>Top scorer in the national league</li>
    <li>Represented school in regional tournaments</li>
  </ul>
</div>

</div>

   </>
  );
};

export default ProfilePage;
