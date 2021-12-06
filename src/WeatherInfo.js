import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city">
        {" "}
        {props.data.city},{props.data.country}
      </div>
      <FormattedDate date={props.data.date} />
      <div>
        <WeatherIcon code={props.data.icon} size={90} />
      </div>
      <div className="temperatures">
        <div className="row">
          <div className="col-1"> </div>
          <div className="col-10">
            <div className="row">
              <div className="col-4">
                <div className="temperature-currentday-max">
                  {" "}
                  {props.data.maximum}º
                  <div>
                    <small>MAX</small>
                  </div>
                </div>{" "}
              </div>
              <div className="col-4">
                <div className="temperatureInfo text-center">
                  <span className="temperature-currentday">
                    {props.data.temperature}
                    <span className="celsius">ºC</span>
                  </span>{" "}
                  <div className="description">{props.data.description}</div>
                </div>
              </div>
              <div className="col-4">
                <div className="temperature-currentday-min">
                  {props.data.minimum}º
                  <div>
                    <small>MIN</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"> </div>
        </div>
      </div>

      <ul>
        <li> Feels-like: {props.data.feelslike}ºC</li>
        <li> Humidity: {props.data.humidity}%</li>
        <li> Wind: {props.data.wind}km/h </li>
      </ul>
    </div>
  );
}
