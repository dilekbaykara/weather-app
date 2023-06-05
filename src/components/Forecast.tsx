import { Hourglass } from "lucide-react";
import { listenerCount } from "process";
import React, { useEffect, useState } from "react";

function Forecast(props: {
  weather: any;
  searchedCity: string;
  setWeather(data: any): void;
  temperatureUnit: string;
  setTemperatureUnit(unit: "f" | "c"): void;
}) {
  const [getForecast, setGetForecast] = useState<any>();

  const searchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.searchedCity}&appid=2e484d828f340f63965c78ca54c9b2a3`
    )
      .then((response) => response.json())
      .then((data) => {
        setGetForecast(data);
      })
      .catch((err) => console.error(err));
  };

  const weekdayResult = (temp: any) => {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var dayNum = new Date(temp.dt * 1000).getDay();
    var result = days[dayNum];
    if (props.temperatureUnit === "f")
      return (
        <div key={result}>
          <img
            src={`https://openweathermap.org/img/wn/${temp.weather[0].icon}.png`}
            alt="img"
          />
          {result} <br></br> {Math.floor((temp.main.temp - 273) * (9 / 5) + 32)}
          &deg;F
          <br></br>
          {temp.weather[0].main}
          <br></br>
        </div>
      );
    else
      return (
        <div key={result}>
          <img
            src={`https://openweathermap.org/img/wn/${temp.weather[0].icon}.png`}
            alt="img"
          />
          {result} <br></br> {Math.floor(temp.main.temp - 273)}
          &deg;C
          <br></br>
          {temp.weather[0].main}
          <br></br>
        </div>
      );
  };

  useEffect(() => {
    searchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.searchedCity]);

  if (!getForecast) return <h3>Loading...</h3>;
  return (
    <div>
      <div className="forecast-title">5 Day Forecast</div>
      <div className="forecast-days">
        {getForecast.list
          .filter((forecastItem: any) =>
            forecastItem.dt_txt.endsWith("12:00:00")
          )
          .map((forecastItem: any) => weekdayResult(forecastItem))}
      </div>
    </div>
  );
}

export default Forecast;
