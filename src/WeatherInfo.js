import React from "react";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="city"> Rio de Janeiro, BR </div>
      <div className="date"> Tuesday 30/11</div>

      <div>
        <img
          src="https://cdn.jsdelivr.net/npm/open-weather-icons@0.0.7/src/svg/03d.svg"
          alt="image"
        />
      </div>
      <div className="temperatures">
        <div className="row">
          <div className="col-2"> </div>
          <div className="col-8">
            <div className="row">
              <div className="col-3">
                <div className="temperature-currentday-min">16º</div>{" "}
              </div>
              <div className="col-6">
                {" "}
                <span className="temperature-currentday">
                  20<span className="celsius">ºC</span>
                </span>{" "}
              </div>
              <div className="col-3">
                <div className="temperature-currentday-max">22º</div>
              </div>
            </div>
          </div>
          <div className="col-2"> </div>
        </div>
      </div>
      <div className="description">Mostly sunny</div>

      <ul>
        <li> Feels like: 20ºC</li>
        <li> Humidity: 79%</li>
        <li> Wind: 3 km/h </li>
      </ul>
    </div>
  );
}
