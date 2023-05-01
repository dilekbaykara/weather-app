import React from "react";
import TimeAndLocation from "./TimeAndLocation";

function TemperatureAndDetails(props: {
  weather: any;
  temperatureUnit: string;
}) {
  return (
    <div id="temp-display-div">
      <TimeAndLocation />
      <p>
        <img src={props.weather.current.condition.icon} alt="" />
      </p>
      <h1>{props.weather.location.name}</h1>
      {props.temperatureUnit === "f" ? (
        <h1 id="temp-display">{props.weather.current.temp_f}&deg;F</h1>
      ) : (
        <h1 id="temp-display">{props.weather.current.temp_c}&deg;C</h1>
      )}
      <div id="temp-details">{props.weather.current.condition.text}</div>
    </div>
  );
}

export default TemperatureAndDetails;
