import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    setweatherData({
      ready: true,
      city: response.data.name,
      icon: "https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/03d.svg",
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      feels_like: response.data.main.fells_like,
      wind: Math.round(response.data.wind.speed),
      maximum: Math.round(response.data.main.temp_max),
      minimum: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
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
        <div className="WeatherInfo">
          <div className="city">{weatherData.city}</div>
          <div className="date"> Tuesday 30/11</div>

          <div>
            <img src={weatherData.icon} alt="icontemp" />
          </div>
          <div className="temperatures">
            <div className="row">
              <div className="col-1"> </div>
              <div className="col-10">
                <div className="row">
                  <div className="col-4">
                    <div className="temperature-currentday-min">
                      {" "}
                      <small>MIN </small>
                      {weatherData.minimum}º
                    </div>{" "}
                  </div>
                  <div className="col-4">
                    {" "}
                    <span className="temperature-currentday">
                      {weatherData.temperature}
                      <span className="celsius">ºC</span>
                    </span>{" "}
                  </div>
                  <div className="col-4">
                    <div className="temperature-currentday-max">
                      {weatherData.maximum}º<small>MAX</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1"> </div>
            </div>
          </div>
          <div className="description">{weatherData.description}</div>

          <ul>
            <li> Feels like: {weatherData.feels_like} ºC</li>
            <li> Humidity: {weatherData.humidity} %</li>
            <li> Wind: {weatherData.wind} km/h </li>
          </ul>
        </div>
        <WeatherForecast />
      </div>
    );
  } else {
    const apiKey = "16830bfc1e47231d3a538e2cfef02d61";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading....";
  }
}
