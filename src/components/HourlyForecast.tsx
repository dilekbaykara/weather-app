import { Hourglass } from "lucide-react";
import React, { useEffect, useState } from "react";

function HourlyForecast(props: {
  weather: any;
  searchedCity: string;
  setWeather(data: any): void;
  temperatureUnit: string;
  setTemperatureUnit(unit: "f" | "c"): void;
}) {
  const [getForecast, setGetForecast] = useState<any>();

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
        setGetForecast(data);
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

  if (props.temperatureUnit === "f")
    return (
      <>
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
                  stroke="#ffff"
                  strokeWidth="2"
                  points={hourlyForecastPoints}
                />
              </svg>

              <div></div>
            </div>
          </div>
          <div className="hours">
            <p>12AM</p>
            <p>6AM</p>
            <p>12PM</p>
            <p>6PM</p>
          </div>
        </div>
      </>
    );
  if (props.temperatureUnit === "c")
    return (
      <>
        <div className="bar-grid-container">
          <div id="hourly-title">
            Hourly Forecast
            <br></br>
          </div>
          <div id="temp-grid-box">
            <div id="temperature-c-div">
              <div id="temperature-c">
                <p>32&deg;C</p>
                <p>26&deg;C</p>
                <p>22&deg;C</p>
                <p>15&deg;C</p>
                <p>10&deg;C</p>
                <p>4&deg;C</p>
                <p>0&deg;C</p>
                <p>-6&deg;C</p>
                <p>-12&deg;C</p>
                <p>-17&deg;C</p>
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
                  stroke="#ffff"
                  strokeWidth="2"
                  points={hourlyForecastPoints}
                />
              </svg>

              <div></div>
            </div>
          </div>
          <div className="hours">
            <p>12AM</p>
            <p>6AM</p>
            <p>12PM</p>
            <p>6PM</p>
          </div>
        </div>
      </>
    );
  else return <div></div>;
}

export default HourlyForecast;
