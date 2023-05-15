import { Hourglass } from "lucide-react";
import React, { useEffect, useState } from "react";

function HourlyForecast(props: {
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
  const hourlyForecastPoints = getForecast.forecast.forecastday[0].hour
    .map(
      (hour: any, index: number) =>
        `${(index * 350) / 24},${((90 - hour.temp_f) * 160) / 90}`
    )
    .join(" ");

  console.log(hourlyForecastPoints);
  return (
    <div className="bar-grid-container">
      <div id="hourly-title">
        Hourly Forecast
        <br></br>
      </div>
      <div id="temp-grid-box">
        <div id="temperature-f-div">
          <div id="temperature-f">
            <p>90&deg;F</p>
            <p>80&deg;F</p>
            <p>70&deg;F</p>
            <p>60&deg;F</p>
            <p>50&deg;F</p>
            <p>40&deg;F</p>
            <p>30&deg;F</p>
            <p>20&deg;F</p>
            <p>10&deg;F</p>
            <p>0&deg;F</p>
          </div>
        </div>
        <div className="bar-grid-border">
          <svg
            viewBox="0 0 350 160"
            className="view-box"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              fill="none"
              stroke="#ccc"
              strokeWidth="2"
              points={hourlyForecastPoints}
            />
          </svg>
          {/* {getForecast.forecast.forecastday[0].hour.map((hour: any) => (
            <div
              className="bar-grid"
              style={{
                display: "inline-block",
                height: hour.temp_f + "px",
                width: "18px",
                backgroundColor: "transparent",
              }}
            ></div>
          ))} */}

          <div></div>
        </div>
      </div>
      <div className="hours">
        <p>12AM</p>
        <p>6AM</p>
        <p>12PM</p>
        <p>6PM</p>
      </div>
      {/* {props.weather.forecast.map} */}
    </div>
  );
}

export default HourlyForecast;
