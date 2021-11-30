import React from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="d-flex justify-content-center">
        <input
          type="search"
          placeholder="Enter a city"
          className="form-control"
        />
        <input type="submit" value="Search" className="btn btn-light ms-1" />
      </form>
      <WeatherInfo />

      <WeatherForecast />
      <footer>
        This was coded by Raquel Wetzel and it is a{" "}
        <a href="https://github.com/Wraquel/my-weather-react-app">
          open-sourced on GitHub{" "}
        </a>
      </footer>
    </div>
  );
}
