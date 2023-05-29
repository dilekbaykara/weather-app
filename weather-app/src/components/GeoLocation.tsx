import React, { useState } from "react";

interface GeolocationProps {
  onLocationFound(location: string): void;
}

function GeoLocation(props: GeolocationProps) {
  // const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function success(pos: { coords: any }) {
    const crd = pos.coords;
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${crd.latitude}&lon=${
        crd.longitude
      }&limit=${5}&appid=2e484d828f340f63965c78ca54c9b2a3`
    );
    const data = await response.json();
    props.onLocationFound(data[0].local_names.en);
    // console.log(data[0].local_names.en);
    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
    setLoading(false);
  }

  function error(err: { code: any; message: any }) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    setLoading(false);
  }

  function getPosition() {
    navigator.geolocation.getCurrentPosition(success, error);
    setLoading(true);
  }

  if (loading) {
    return (
      <svg
        className="spinner"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
      </svg>
    );
  }

  return (
    <div>
      <button id="gr-location" onClick={getPosition}>
        <svg
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default GeoLocation;
