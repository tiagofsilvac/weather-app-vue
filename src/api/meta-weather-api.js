import axios from "axios";

/*
 * Meta Weather API does not support cors, so every call goes though a proxy server
 * using a private heroku server with an instance of cors-anywhere project by Rob--W.
 */
const proxyServerUrl = "https://cors-anywhere-tfsc.herokuapp.com/";
const metaWeatherBaseUrl = "https://www.metaweather.com";

const fetchLocations = async (query) => {
  try {
    const response = await axios.get(
      `${proxyServerUrl}${metaWeatherBaseUrl}/api/location/search/?query=${query}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchLocationWeather = async (woeid) => {
  try {
    const response = await axios.get(
      `${proxyServerUrl}${metaWeatherBaseUrl}/api//api/location/${woeid}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  fetchLocations,
  fetchLocationWeather,
};
