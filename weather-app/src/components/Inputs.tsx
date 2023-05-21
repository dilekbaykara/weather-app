import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import GeoLocation from "./GeoLocation";

function Inputs(props: {
  setSearchedCity(city: string): void;
  searchedCity: string;
  setWeather(data: any): void;
  temperatureUnit: string;
  setTemperatureUnit(unit: "f" | "c"): void;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [input, setInput] = useState("");
  const [forecastDays, setForecastDays] = useState(false);

  const searchWeather = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "weatherapi.com.p.rapidapi.com",
        "X-RapidAPI-Key": "462eaa5d277d46b0957222907232503",
      },
    };

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=462eaa5d277d46b0957222907232503&q=${props.searchedCity}&aqi=no`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.setWeather(data);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    searchWeather();
  }, [props.searchedCity]);

  const setForecast = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "api.openweathermap.org",
        "X-RapidAPI-Key": "2e484d828f340f63965c78ca54c9b2a3",
      },
    };

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.searchedCity}&appid=2e484d828f340f63965c78ca54c9b2a3`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "bye");
        props.setWeather(data);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    setForecast();
  }, [props.searchedCity]);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    props.setSearchedCity(input);
    console.log(input);
  }

  if (!isLoaded) return <h3>Loading...</h3>;

  return (
    <div>
      <div id="search-container">
        <AiOutlineSearch onClick={handleSubmit} />
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search.."
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </form>

        <div id="temperature">
          {/* <button id="gr-location">
            <GrLocation color="#ffffff" />
          </button> */}
          <GeoLocation />
          <button
            name="metric"
            id="fahrenheit-button"
            onClick={(e) => {
              props.setTemperatureUnit("f");
            }}
          >
            &deg;F
          </button>
          <p>|</p>
          <button
            name="imperial"
            id="celcius-button"
            onClick={(e) => {
              props.setTemperatureUnit("c");
            }}
          >
            &deg;C
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
