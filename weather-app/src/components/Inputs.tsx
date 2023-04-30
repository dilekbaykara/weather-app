import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";

function Inputs() {
  const [weather, setWeather] = useState<any>({});
  const [city, setCity] = useState("London");
  useEffect(() => {
    async function load() {
      const weatherData = await getWeather();
      setWeather(weatherData);
      console.log(weatherData);
    }

    load();
  }, []);

  const handleSearch = () => {
    if (weather.location.name !== "") {
      setWeather({ location: { name: weather.location.name } });
    }
  };
  return (
    <div>
      <div id="search-container">
        <AiOutlineSearch onClick={handleSearch} />
        <input
          id="search-bar"
          type="text"
          placeholder="Search.."
          value={weather?.location?.name}
          onChange={(e) =>
            setWeather(<p> Showing weather for: {weather?.location?.name} </p>)
          }
        ></input>
        <GrLocation />
        <div className="temperature">
          <button name="metric" id="fahrenheit-button">
            &deg;F
          </button>
          <p>|</p>
          <button name="imperial" id="celcius-button">
            &deg;C
          </button>
        </div>
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

export default Inputs;
