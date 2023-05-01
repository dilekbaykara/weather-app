import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../src/mag-glass.svg";
import "./App.css";

import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";

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
          <TemperatureAndDetails
            weather={weather}
            temperatureUnit={temperatureUnit}
          />

          <div id="feels-like-div">
            <p>Feels Like: {weather.current.feelslike_f}&deg;F</p>
            <p>Humidity: {weather.current.humidity}%</p>
            <p>Wind Speed: {weather.current.gust_mph} mph</p>
          </div>
          <div id="hourly-forecast">
            <p>Hourly Forecast Placeholder</p>
          </div>
          <div id="daily-forecast">
            <p>Daily Forecast Placeholder</p>
          </div>
        </>
      ) : (
        <p>loading..</p>
      )}
    </div>
  );
}

export default App;
