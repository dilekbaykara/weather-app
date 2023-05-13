import { Hourglass } from "lucide-react";
import React, { useEffect, useState } from "react";

function Forecast(props: {
  weather: any;
  searchedCity: string;
  setWeather(data: any): void;
  // setIsLoaded: void;
}) {
  const [getForecast, setGetForecast] = useState<any>();

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
      `https://api.weatherapi.com/v1/forecast.json?key=462eaa5d277d46b0957222907232503&q=${props.searchedCity}&days=4&aqi=no&alerts=no`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "hi");
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
      <div className="forecast-title">3 Day Forecast</div>
      <div className="forecast-days">
        <div id="day-0-temps">
          <img
            src={getForecast.forecast.forecastday[0].day.condition.icon}
            alt=""
          />
          <br></br>
          {getForecast.forecast.forecastday[0].day.condition.text}
          <br></br>
          High: {getForecast.forecast.forecastday[0].day.maxtemp_f}&deg;F
          <br></br>
          Low: {getForecast.forecast.forecastday[0].day.mintemp_f}&deg;F
        </div>
        <div id="day-1-temps">
          <img
            src={getForecast.forecast.forecastday[1].day.condition.icon}
            alt=""
          />
          <br></br>
          {getForecast.forecast.forecastday[1].day.condition.text}
          <br></br>
          High: {getForecast.forecast.forecastday[1].day.maxtemp_f}&deg;F
          <br></br>
          Low: {getForecast.forecast.forecastday[1].day.mintemp_f}&deg;F
        </div>
        <div id="day-2-temps">
          <img
            src={getForecast.forecast.forecastday[2].day.condition.icon}
            alt=""
          />
          <br></br>
          {getForecast.forecast.forecastday[2].day.condition.text}
          <br></br>
          High: {getForecast.forecast.forecastday[2].day.maxtemp_f}&deg;F
          <br></br>
          Low: {getForecast.forecast.forecastday[2].day.mintemp_f}&deg;F
        </div>
      </div>
    </div>
  );
}

export default Forecast;
