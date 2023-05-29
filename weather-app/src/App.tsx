import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../src/mag-glass.svg";
import "./App.css";

import Forecast from "./components/Forecast";
import HourlyForecast from "./components/HourlyForecast";
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
        </>
      ) : (
        <p>loading..</p>
      )}
    </div>
  );
}

export default App;
