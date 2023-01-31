/* eslint-disable-next-line no-console */
import axios from "axios";

const getForecast = (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchText,
  setErrorMessage
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
      setErrorMessage("");
    })
    .catch((error) => {
      const { status } = error.response || {};
      if (status === 404) {
        setErrorMessage(`${searchText}? Never heard of it!`);
        console.error("Location invalid", error);
      }
      if (status === 500) {
        setErrorMessage(
          "Server error. Unlucky. Come back soon when hopefully it's been fixed by someone who knows what they're doing!"
        );
        console.error("Server error", error);
      }
    });
};

export default getForecast;
