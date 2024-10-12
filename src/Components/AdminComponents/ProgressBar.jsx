import React, { useEffect, useState } from "react";

function ProgressBar({ progressVal }) {
  const [progress, setProgress] = useState(0); // Initial progress is 0%

  useEffect(() => {
    if (progress < 100) {
      setProgress(progressVal);
    }
  }, [progressVal]);

  return (
    <div className="container mt-5">
      <div
        className="progress"
        style={{
          width: "960px",
          height: "3px",
          position: "relative",
          backgroundColor: "#e0e0e0", // Background color for the bar
          cursor: "pointer",
          overflow: "visible", // Ensure the circles are visible outside the bar
        }}
      >
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${progress}%`,
            backgroundColor: "#FFD700", // Movie-like yellow color
            transition: "width 0.3s ease",
            height: "100%", // Full height of the bar
          }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>

        {/* Small Circles at the end of each step */}
        {[0, 50, 100].map((step, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: "50%",
              left: `${
                step === 0
                  ? "100px"
                  : step === 100
                  ? "calc(100% - 100px)"
                  : "50%"
              }`, // 20px from start for first, 20px from end for last
              transform: "translate(-50%, -50%)",
              width: "25px", // Circle size
              height: "25px",
              backgroundColor:
                progress >= (index + 1) * 33.33 ? "#FFD700" : "#e0e0e0", // Color each circle step by step
              borderRadius: "50%",
              border: "2px solid #000", // Border around the circle
              zIndex: 1, // Ensure circles are visible above the bar
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;
