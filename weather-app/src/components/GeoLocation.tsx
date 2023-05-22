import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";

function GeoLocation() {
  const [status, setStatus] = useState(null);

  function success(pos: { coords: any }) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err: { code: any; message: any }) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error);

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
