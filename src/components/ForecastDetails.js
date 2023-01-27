import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";

function ForecastDetails({ forecast }) {
  const formattedDate = new Date(forecast.date).toDateString();
  const windDirection = forecast.wind.direction.toUpperCase();
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temp-max">
        Max: {forecast.temperature.max}&deg;C
      </div>
      <div className="forecast-details__temp-min">
        Min: {forecast.temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">
        Humidity: {forecast.humidity}%
      </div>
      <div className="forecast-details__wind-speed">
        Wind: {forecast.wind.speed} {windDirection}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    description: PropTypes.string,
    humidity: PropTypes.number,
    icon: PropTypes.string,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};

export default ForecastDetails;
