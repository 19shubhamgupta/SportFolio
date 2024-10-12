import React from 'react';
import { useForm } from "react-hook-form";

function EventLocation({register}) {
  

  return (
    <div>
      <div className="row">
        <div className="col-md-6" style={{ paddingRight: "30px" }}>
          {/* Input Fields for Event Location */}
          {/* State */}
          <div className="form-group mt-3">
            <label htmlFor="state" className="col-form-label" style={{ fontSize: "22px" }}>
              State:
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="Enter state"
              style={{ width: "calc(100% + 10px)" }} // Increased width
              {...register("state", { required: true })} // Register state input
            />
          </div>
          {/* City */}
          <div className="form-group mt-3">
            <label htmlFor="city" className="col-form-label" style={{ fontSize: "22px" }}>
              City:
            </label>
            <input
              type="text"
              className="form-control"
              id="city" // Changed id for uniqueness
              placeholder="Enter city"
              style={{ width: "calc(100% + 10px)" }} // Increased width
              {...register("city", { required: true })} // Register city input
            />
          </div>
          {/* Pincode */}
          <div className="form-group mt-3">
            <label htmlFor="pincode" className="col-form-label" style={{ fontSize: "22px" }}>
              Pincode:
            </label>
            <input
              type="text"
              className="form-control"
              id="pincode" // Changed id for uniqueness
              placeholder="Enter pincode"
              style={{ width: "calc(100% + 10px)" }} // Increased width
              {...register("pincode", { required: true })} // Register pincode input
            />
          </div>
        </div>

        {/* Address Section */}
        <div className="col-md-6" style={{ paddingLeft: "30px" }}>
          <h2 style={{ marginTop: "2.5vh", fontSize: "22px" }}>
            Address
          </h2>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              id="address"
              rows="5"
              placeholder="Enter the address in detail"
              style={{ width: "calc(100% + 10px)" }} // Increased width
              {...register("address", { required: true })} // Register address textarea
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventLocation;
