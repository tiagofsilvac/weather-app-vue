import axios from "axios";

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
