import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";
function ForecastDetails({ forecast }) {
  const formattedDate = new Date(forecast.date).toDateString();
  const windDirection = forecast.wind.direction.toUpperCase();
  const weather = forecast.description;
  const bgStyle = {
    margin: "auto",
    width: "640px",
    height: "420px",
    //backgroundImage: `url(/images/${weather}.jpg)`,
    fontSize: "32px",
    fontWeight: "bold",
  };
  return (
    <div className="forecast-details" style={bgStyle}>
      <br />
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
        Wind: {windDirection} {forecast.wind.speed}mph
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    description: PropTypes.string,
    humidity: PropTypes.number,
    icon: PropTypes.number,
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
