import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState<any>();

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
