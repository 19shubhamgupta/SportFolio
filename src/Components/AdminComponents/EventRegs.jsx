import React from 'react';
import { useForm } from "react-hook-form";

function EventRegs({register}) {
  

  return (
    <div>
      <div className="row">
        <div className="col-md-6" style={{ paddingRight: "30px" }}>
          {/* Input Fields for Event Information */}
          {/* Date */}
          <div className="form-group mt-3">
            <label htmlFor="eventDate" className="col-form-label" style={{ fontSize: "22px" }}>
              Date:
            </label>
            <input
              type="text" // Changed to date input type
              className="form-control"
              id="eventDate"
              style={{ width: "calc(100% + 10px)" }} // Increased width
              {...register("eventDate", { required: true })} // Register date input
            />
          </div>
          {/* Start Time */}
          <div className="form-group mt-3">
            <label htmlFor="startTime" className="col-form-label" style={{ fontSize: "22px" }}>
              Start Time:
            </label>
            <input
              type="text" // Changed to time input type
              className="form-control"
              id="startTime"
              style={{ width: "calc(100% + 10px)" }} // Increased width
              {...register("startTime", { required: true })} // Register start time input
            />
          </div>
          {/* End Time */}
          <div className="form-group mt-3">
            <label htmlFor="endTime" className="col-form-label" style={{ fontSize: "22px" }}>
              End Time:
            </label>
            <input
              type="text" // Changed to time input type
              className="form-control"
              id="endTime"
              style={{ width: "calc(100% + 10px)" }} // Increased width
              {...register("endTime", { required: true })} // Register end time input
            />
          </div>
        </div>

        {/* Judges Name Section */}
        <div className="col-md-6" style={{ paddingLeft: "30px", marginTop: "8vh" }}>
          <h2 style={{ marginTop: "2.5vh", fontSize: "22px" }}>
            Judges Name
          </h2>
          {/* Input Fields for Judges Name */}
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              id="judge1"
              placeholder="Enter Judge 1 name"
              style={{ width: "calc(100% + 10px)" }} // Increased width
              {...register("judge1", { required: true })} // Register judge 1 input
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              id="judge2"
              placeholder="Enter Judge 2 name (optional)"
              style={{ width: "calc(100% + 10px)" }} // Increased width
              {...register("judge2")} // Register judge 2 input (optional)
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              id="judge3"
              placeholder="Enter Judge 3 name (optional)"
              style={{ width: "calc(100% + 10px)" }} // Increased width
              {...register("judge3")} // Register judge 3 input (optional)
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventRegs;
