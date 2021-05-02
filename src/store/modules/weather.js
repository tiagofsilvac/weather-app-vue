import metaWeatherApi from "../../api/meta-weather-api";

// initial state
const state = () => ({
  weatherData: null,
});

// getters
const getters = {
  getWeatherStateAbbr(state) {
    if (state.weatherData) {
      return state.weatherData;
    }
  },
};

// mutations
const mutations = {
  setWeatherData(state, data) {
    state.weatherData = data;
  },
};

// actions
const actions = {
  /*
   * Fetches weather from API, handles response data and sets app state.
   */
  async searchLocationWeather({ commit, dispatch }, woeid) {
    try {
      dispatch("utils/toggleLoading", true, { root: true });
      const data = await metaWeatherApi.fetchLocationWeather(woeid);
      console.log(`Weather data fetched: ${JSON.stringify(data)}`);
      const weather = data.consolidated_weather.map((entry) => {
        return {
          id: entry.id,
          date: entry.applicable_date,
          weatherStateAbbr: entry.weather_state_abbr,
          weatherStateName: entry.weather_state_name,
          currentTemp: entry.the_temp,
          minTemp: entry.min_temp,
          maxTemp: entry.max_temp,
          humidity: entry.humidity,
          windSpeed: entry.wind_speed,
          windDirection: entry.wind_direction,
          windDirectionCompass: entry.wind_direction_compass,
        };
      });
      const weatherData = {
        currentWeather: weather[0],
        forecast: weather.slice(1),
        location: `${data.title}, ${data.parent.title}`,
      };
      commit("setWeatherData", weatherData);
      dispatch(
        "utils/changeAppBackground",
        weatherData.currentWeather.weatherStateAbbr,
        { root: true }
      );
      dispatch("utils/toggleLoading", false, { root: true });
    } catch (error) {
      console.log(error);
      dispatch("utils/toggleLoading", false, { root: true });
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
