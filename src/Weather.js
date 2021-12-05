import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import background from "./midia/Image-background.jpg";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setweatherData({
      coordinates: response.data.coord,
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      temperature: Math.round(response.data.main.temp),
      feelslike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].main,
      wind: Math.round(response.data.wind.speed),
      maximum: Math.round(response.data.main.temp_max),
      minimum: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
    });
  }
  function search() {
    const apiKey = "16830bfc1e47231d3a538e2cfef02d61";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div
        className="Weather"
        style={{ backgroundImage: `url(${background})` }}
      >
        <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
            onChange={handleChangeCity}
          />
          <input type="submit" value="Search" className="btn btn-light ms-1" />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
