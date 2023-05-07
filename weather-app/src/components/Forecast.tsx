import React, { useEffect, useState } from "react";

function Forecast(props: {
  weather: any;
  searchedCity: string;
  setWeather(data: any): void;
  // setIsLoaded: void;
}) {
  const [getForecast, setGetForecast] = useState([]);

  const forecastDays = {};
  const searchWeather = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "weatherapi.com.p.rapidapi.com",
        "X-RapidAPI-Key": "462eaa5d277d46b0957222907232503",
      },
    };

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=462eaa5d277d46b0957222907232503&q=${props.searchedCity}&days=10&aqi=no&alerts=no`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGetForecast(data);
        // props.setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    searchWeather();
  }, [props.searchedCity]);

  if (!getForecast) return <h3>Loading...</h3>;

  return (
    <div>
      10 Day Forecast
      <hr></hr>
      <p>{props.weather.forecast}</p>
      {/* {props.weather.forecast.map} */}
    </div>
  );
}

export default Forecast;
