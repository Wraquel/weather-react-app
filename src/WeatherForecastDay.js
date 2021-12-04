import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Weather-forecast-day"> {day()} </div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div>
        <span className="Weather-forecast-temp-max">{maxTemperature()}º</span>
        <span className="Weather-forecast-temp-min">{minTemperature()}º</span>
      </div>
    </div>
  );
}
