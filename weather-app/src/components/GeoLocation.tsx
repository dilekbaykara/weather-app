import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";

function GeoLocation() {
  const [status, setStatus] = useState(null);
  const getLocation = () => {
    if (!navigator.geolocation) {
      return "Geolocation is not supported by your browser";
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      ("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
        },
        () => {
          return "Unable to retrieve your location";
        }
      );
    }
  };

  return (
    <div>
      <button id="gr-location" onClick={getLocation}>
        <GrLocation color="#ffffff" />
        {status}
      </button>
    </div>
  );
}

export default GeoLocation;
