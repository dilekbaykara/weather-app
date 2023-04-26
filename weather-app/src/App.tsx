import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../src/mag-glass.svg";
import "./App.css";

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
      <div id="search-container">
        <input id="search-bar" type="text" placeholder="Search.."></input>
        <button>
          <Logo className="logo" />
        </button>
      </div>
      <h1>Weather in {weather.location.name}</h1>
      <h1>Temperature {weather.current.temp_f}&deg;F</h1>
      <h1>Feels Like: {weather.current.feelslike_f}&deg;F</h1>
      <h1>Humidity: {weather.current.humidity}%</h1>
      <h1>Wind Speed: {weather.current.gust_mph} mph</h1>
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
