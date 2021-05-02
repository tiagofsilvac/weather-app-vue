export const weatherImageHelper = {
  methods: {
    /*
     * Returns correct asset based on the weather abbreviation string.
     */
    getWeatherImage(weatherState) {
      switch (weatherState) {
        case "sn":
          return require("@/assets/weather-icons/snow.png");
        case "sl":
          return require("@/assets/weather-icons/sleet.png");
        case "h":
          return require("@/assets/weather-icons/hail.png");
        case "t":
          return require("@/assets/weather-icons/thunderstorm.png");
        case "hr":
          return require("@/assets/weather-icons/heavy-rain.png");
        case "lr":
          return require("@/assets/weather-icons/light-rain.png");
        case "s":
          return require("@/assets/weather-icons/showers.png");
        case "hc":
          return require("@/assets/weather-icons/heavy-cloud.png");
        case "lc":
          return require("@/assets/weather-icons/light-cloud.png");
        case "c":
          return require("@/assets/weather-icons/clear.png");
      }
    },
  },
  filters: {
    /*
     * Rounds a value to the nearest whole number.
     */
    roundNumber(value) {
      return Math.round(value);
    },
    /*
     * Converts a value from mph to kmh.
     */
    speedConverter(speed) {
      return (speed * 1.61).toFixed(1);
    },
  },
};
