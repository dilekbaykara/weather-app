/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../src/mag-glass.svg";
import "./App.css";

import Forecast from "./components/Forecast";
import HourlyForecast from "./components/HourlyForecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import UpdatedTime from "./components/UpdatedTime";

function App() {
  const [weather, setWeather] = useState<any>();
  const [searchedCity, setSearchedCity] = useState("Juneau");
  const [temperatureUnit, setTemperatureUnit] = useState<"f" | "c">("f");

  return (
    <div className="App">
      <header className="App-header"></header>
      <Inputs
        setSearchedCity={setSearchedCity}
        searchedCity={searchedCity}
        setWeather={setWeather}
        temperatureUnit={temperatureUnit}
        setTemperatureUnit={setTemperatureUnit}
      />

      {weather ? (
        <>
          <UpdatedTime weather={weather} />
          <TemperatureAndDetails
            weather={weather}
            temperatureUnit={temperatureUnit}
          />
          <div id="feels-like-div">
            {temperatureUnit === "f" ? (
              <>
                <p>Feels Like: {weather.current.feelslike_f}&deg;F</p>
                <p>Humidity: {weather.current.humidity}%</p>
                <p>Wind Speed: {weather.current.gust_mph} mph</p>
              </>
            ) : (
              <>
                <p>Feels Like: {weather.current.feelslike_c}&deg;C</p>
                <p>Humidity: {weather.current.humidity}%</p>
                <p>Wind Speed: {weather.current.gust_mph} mph</p>
              </>
            )}
          </div>
          <div id="hourly-forecast">
            <HourlyForecast
              temperatureUnit={temperatureUnit}
              searchedCity={searchedCity}
              setWeather={setWeather}
              weather={weather}
              setTemperatureUnit={setTemperatureUnit}
            />
          </div>
          <div id="daily-forecast">
            <Forecast
              searchedCity={searchedCity}
              setWeather={setWeather}
              weather={weather}
              temperatureUnit={temperatureUnit}
              setTemperatureUnit={setTemperatureUnit}
            />
          </div>
          <footer>
            COPYRIGHT © 2023 DILEK BAYKARA{" "}
            <a className="svg-icon" href="https://github.com/dilekbaykara">
              <svg
                className="svg-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="#ffff"
              >
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
              </svg>
            </a>
          </footer>
        </>
      ) : (
        <p>loading..</p>
      )}
    </div>
  );
}

export default App;
