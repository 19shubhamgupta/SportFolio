import React from 'react';
import { useForm } from "react-hook-form";

function EventDetail({register}) {
  

  return (
    <div>
      <div className="row">
        <div className="col-md-6" style={{ paddingRight: "30px" }}>
          {/* Input Fields for Profile Information */}
          {/* Event Name */}
          <div className="form-group mt-3">
            <label htmlFor="eventName" className="col-form-label" style={{ fontSize: "22px" }}>
              Event Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="eventName"
              placeholder="Enter event name"
              style={{ width: "calc(100% + 10px)" }}
              {...register("eventName", { required: true })}
            />
          </div>
          {/* Sports Type */}
          <div className="form-group mt-3">
            <label htmlFor="sportType" className="col-form-label" style={{ fontSize: "22px" }}>
              Sports Type:
            </label>
            <select
              className="form-select"
              id="sportType"
              {...register("sportType", { required: true })} // Register select input
            >
              <option value="" disabled>Select Sport Type</option>
              <option value="Basketball">Basketball</option>
              <option value="Football">Football</option>
              <option value="Tennis">Tennis</option>
              <option value="Cricket">Cricket</option>
              <option value="Running">Running</option>
            </select>
          </div>
          {/* Tag Line */}
          <div className="form-group mt-3">
            <label htmlFor="tagLine" className="col-form-label" style={{ fontSize: "22px" }}>
              Tag Line:
            </label>
            <input
              type="text"
              className="form-control"
              id="tagLine" // Changed id for uniqueness
              placeholder="Write a short description"
              style={{ width: "calc(100% + 10px)" }} // Increased width
              {...register("tagLine", { required: true })} // Register input
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="col-md-6" style={{ paddingLeft: "30px" }}>
          <h2 style={{ marginTop: "2.5vh", fontSize: "22px" }}>
            Description
          </h2>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              id="description"
              rows="5"
              placeholder="Enter event description"
              style={{ width: "calc(100% + 10px)" }} // Increased width
              {...register("description", { required: true })} // Register textarea
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="form-group row mt-3">
            <label
              htmlFor="imageUpload"
              className="col-form-label" // Changed from col-sm-4 to col-sm-3 to reduce label width
              style={{ fontSize: "22px" }}
            >
              Banner:
            </label>
            <input
              type="file"
              className="form-control"
              id="imageUpload"
              style={{ width: "calc(100% + 10px)" }}
              {...register("imageUpload")} // Register file input (optional validation)
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
