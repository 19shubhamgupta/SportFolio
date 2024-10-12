import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import EventDetail from "./EventDetail";
import EventLocation from "./EventLocation";
import EventRegs from "./EventRegs";
import { useForm } from "react-hook-form";

function OrganzEvents() {
  const { register, handleSubmit } = useForm();

  const [progressVal, setProgressVal] = useState(0);
  const [eventDetailPage, setEventDetailPage] = useState("EventDetail");

  const handleProgress = () => {
    const newVal = progressVal + 33.33;
    setProgressVal(newVal);

    if (newVal === 33.33) {
      setEventDetailPage("EventLocation");
    } else if (newVal === 66.66) {
      setEventDetailPage("EventRegs");
    }
  };

  const eventDataHandler = (data) => {
    console.log("Form Data Submitted:", data); // Event creation form data is here
  };

  return (
    <div>
      <h1 className="mb-2">Organize Events</h1>
      <ProgressBar progressVal={progressVal} />
      <div className="container" style={{ width: "1200px", marginTop: "50px" }}>
        <form
          style={{
            margin: "0px 0px 30px 0px",
            flexDirection: "column",
            fontSize: "1.25vw",
          }}
          className="d-flex gap-3"
          onSubmit={handleSubmit(eventDataHandler)} 
        >
          {eventDetailPage === "EventDetail" && <EventDetail register={register} />}
          {eventDetailPage === "EventLocation" && <EventLocation register={register} />}
          {eventDetailPage === "EventRegs" && <EventRegs register={register} />}

          <div className="form-group mt-3" style={{ marginLeft: "350px" }}>
            <div className="col-sm-10 offset-sm-2">
              {progressVal === 66.66 ? (
                <button
                  type="submit" // Correctly set to submit
                  className="btn"
                  style={{
                    backgroundColor: "#FFD700",
                    color: "black",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    fontSize: "16px",
                  }}
                >
                  Create
                </button>
              ) : (
                <button
                  type="button" // Set to button to avoid form submission
                  className="btn"
                  style={{
                    backgroundColor: "#FFD700",
                    color: "black",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    fontSize: "16px",
                  }}
                  onClick={handleProgress} // Handle progress change on click
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrganzEvents;
