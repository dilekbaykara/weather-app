import React, { useState } from "react";

function GeoLocation() {
  // const [status, setStatus] = useState(null);

  function success(pos: { coords: any }) {
    const crd = pos.coords;

    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err: { code: any; message: any }) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error);

  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     return "Geolocation is not supported by your browser";
  //   } else {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //     ("Locating...");

  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setStatus(null);
  //       },
  //       () => {
  //         return "Unable to retrieve your location";
  //       }
  //     );
  //   }
  // };

  return (
    <div>
      <button id="gr-location" onClick={GeoLocation}>
        <svg
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
          ></path>
        </svg>
        {/* {status} */}
      </button>
    </div>
  );
}

export default GeoLocation;
