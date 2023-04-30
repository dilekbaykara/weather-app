import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";

function Inputs() {
  const [weather, setWeather] = useState<any>();
  const [searchedCity, setSearchedCity] = useState("London");
  const [isLoaded, setIsLoaded] = useState(false);
  const [input, setInput] = useState("");

  const searchWeather = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "weatherapi.com.p.rapidapi.com",
        "X-RapidAPI-Key": "462eaa5d277d46b0957222907232503",
      },
    };

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=462eaa5d277d46b0957222907232503&q=${searchedCity}&aqi=no`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    searchWeather();
  }, [searchedCity]);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setSearchedCity(input);
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
          <button id="gr-location">
            <GrLocation />
          </button>
          <button
            name="metric"
            id="fahrenheit-button"
            onClick={(e) => {
              console.log(weather.current.temp_f);
            }}
          >
            &deg;F
          </button>
          <p>|</p>
          <button
            name="imperial"
            id="celcius-button"
            onClick={(e) => {
              console.log(weather.current.temp_c);
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
