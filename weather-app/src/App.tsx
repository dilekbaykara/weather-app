import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../src/mag-glass.svg";
import "./App.css";

import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";

function App() {
  const [weather, setWeather] = useState<any>();
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  // Adding one more state to store cities being searched for
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function load() {
      const weatherData = await getWeather();
      setWeather(weatherData);
      console.log(weatherData);
    }

    load();
  }, []);
  if (!weather) {
    return <p>loading</p>;
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <Inputs />
      <div id="temp-display-div">
        <TimeAndLocation />
        <h1>{weather.location.name}</h1>
        <h1 id="temp-display">{weather.current.temp_f}&deg;F</h1>
        <TemperatureAndDetails />
      </div>
      <div id="feels-like-div">
        <p>Feels Like: {weather.current.feelslike_f}&deg;F</p>
        <p>Humidity: {weather.current.humidity}%</p>
        <p>Wind Speed: {weather.current.gust_mph} mph</p>
      </div>
    </div>
  );
}

async function getWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=462eaa5d277d46b0957222907232503&q=London&aqi=no"
  );

  return response.json();
}

export default App;
