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
      10 Day Forecast
      <hr></hr>
      <p>{props.weather.forecast}</p>
      <p>
        {getForecast.forecast.forecastday.map((day: any) => (
          <span className="bar-grid" style={{ margin: "0 2px" }}>
            {day.hour.map((hour: any) => (
              <div
                style={{
                  display: "inline-block",
                  height: hour.temp_f + "px",
                  width: "4px",
                  backgroundColor: "white",
                }}
              ></div>
            ))}
          </span>
        ))}
      </p>
      {/* {props.weather.forecast.map} */}
    </div>
  );
}

export default Forecast;
