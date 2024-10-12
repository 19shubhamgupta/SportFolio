import React from "react";

const ProfileForm = () => {
  return (
    <div className="container mt-3" style={{ width: "960px" }}>
      <h3 style={{ textAlign: "center", fontSize: "2.5vw", marginLeft: "70px" }}>
        Profile Information
      </h3>
      <form
        style={{
          margin: "0px 0px 30px 0px",
          flexDirection: "column",
          fontSize: "1.25vw",
        }}
        className="d-flex gap-3"
      >
        <div className="row">
          {/* Profile Photo Section */}
          <div className="col-md-6">
            <div
              className="d-flex justify-content-center  position-relative"
              style={{ margin: "15px 0px 50px 500px" , marginBottom : "2rem" }}
            >
              <img
                src="src/assets/abstract-user-flat-4.png"
                alt="Profile Photo"
                className="rounded-circle"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>
            {/* Input Fields for Profile Information */}
            {/* First Name */}
            <div className="form-group row mt-3" style={{ marginLeft: "70px" }}>
              <label htmlFor="firstName" className="col-sm-4 col-form-label">
                First Name :
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter first name"
                  style={{ width: "calc(100% + 10px)" }} // Increased width
                />
              </div>
            </div>
            {/* Last Name */}
            <div className="form-group row mt-3" style={{ marginLeft: "70px" }}>
              <label htmlFor="lastName" className="col-sm-4 col-form-label">
                Last Name :
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter last name"
                  style={{ width: "calc(100% + 10px)" }} // Increased width
                />
              </div>
            </div>
            {/* Sports */}
            <div className="form-group row mt-3" style={{ marginLeft: "70px" }}>
              <label htmlFor="sports" className="col-sm-4 col-form-label">
                Sports :
              </label>
              <div className="col-sm-8">
                <input
                  type="url"
                  className="form-control"
                  id="sports"
                  placeholder="Enter your Sport"
                  style={{ width: "calc(100% + 10px)" }} // Increased width
                />
              </div>
            </div>
            {/* Phone Number */}
            <div className="form-group row mt-3" style={{ marginLeft: "70px" }}>
              <label htmlFor="phone" className="col-sm-4 col-form-label">
                Phone No. :
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Phone No."
                  style={{ width: "calc(100% + 10px)" }} // Increased width
                />
              </div>
            </div>
            {/* Address */}
            <div className="form-group row mt-3" style={{ marginLeft: "70px" }}>
              <label htmlFor="address" className="col-sm-4 col-form-label">
                Address :
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Address"
                  style={{ width: "calc(100% + 10px)" }} // Increased width
                />
              </div>
            </div>
            {/* State */}
            <div className="form-group row mt-3" style={{ marginLeft: "70px" }}>
              <label htmlFor="state" className="col-sm-4 col-form-label">
                State:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  placeholder="Enter state"
                  style={{ width: "calc(100% + 10px)" }} // Increased width
                />
              </div>
            </div>
            {/* City */}
            <div className="form-group row mt-3" style={{ marginLeft: "70px" }}>
              <label htmlFor="city" className="col-sm-4 col-form-label">
                City:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter city"
                  style={{ width: "calc(100% + 10px)" }} // Increased width
                />
              </div>
            </div>
            {/* Pincode */}
            <div className="form-group row mt-3" style={{ marginLeft: "70px" }}>
              <label htmlFor="pincode" className="col-sm-4 col-form-label">
                Pincode:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  placeholder="Enter pincode"
                  style={{ width: "calc(100% + 10px)" }} // Increased width
                />
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="col-md-6">
            <h3 style={{ marginTop: "35vh", marginLeft: "70px" }}>Achievements</h3>
            {/* Achievements Input Fields */}
            {[...Array(3)].map((_, index) => (
              <div className="form-group row " style={{ width: "100%", marginLeft: "70px" }} key={index}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id={`addItem${index + 1}`}
                    placeholder="Add achievements..."
                    aria-label="Add achievements"
                    style={{ width: "calc(100% + 10px)" }} // Increased width
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-group row mt-3" style={{ marginLeft: "350px" }}>
          <div className="col-sm-10 offset-sm-2">
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#FFD700", // Movie-like yellow color
                color: "black",
                fontWeight: "bold",
                padding: "10px 20px",
                fontSize: "16px",
              }}
            >
              Submit Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
