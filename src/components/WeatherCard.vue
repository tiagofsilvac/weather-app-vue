<template>
  <div id="weather-card">
    <div class="card-container">
      <div class="location-wrapper">
        <span class="location">
          {{ location }}
        </span>
        <span class="date">{{ new Date(weather.date) | formatDate }}</span>
      </div>
      <div class="weather-wrapper">
        <div class="state">
          <img :src="getWeatherImage(weather.weatherStateAbbr)" />
          <span>{{ weather.weatherStateName }}</span>
        </div>
        <div class="temperature">
          <span class="current-temperature"
            >{{ weather.currentTemp | roundNumber }}º</span
          >
          <div class="min-max-temperature-wrapper">
            <div class="min-max-temperature"></div>
            <span>{{ weather.minTemp | roundNumber }}º</span>
            <hr />
            <span>{{ weather.maxTemp | roundNumber }}º</span>
          </div>
        </div>
      </div>
      <div class="conditions">
        <span
          ><font-awesome-icon icon="tint" class="fa-icon" />{{
            weather.humidity
          }}%</span
        >
        <span
          ><font-awesome-icon icon="wind" class="fa-icon" />{{
            weather.windSpeed | speedConverter
          }}
          km/h</span
        >
        <span
          ><font-awesome-icon icon="compass" class="fa-icon" />{{
            weather.windDirectionCompass
          }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { weatherImageHelper } from "../mixins/weather-image-helper";

export default {
  name: "WeatherCard",
  mixins: [weatherImageHelper],

  props: {
    location: {
      type: String,
    },
    weather: {
      type: Object,
      default: () => {},
    },
  },

  filters: {
    formatDate(date) {
      return date.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    roundNumber(value) {
      return Math.round(value);
    },
    speedConverter(speed) {
      return (speed * 1.61).toFixed(1);
    },
  },
};
</script>

<style scoped>
#weather-card {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.card-container {
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.location-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.location-wrapper span {
  font-size: 16px;
}

.location-wrapper .location {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}

.weather-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.weather-wrapper .state {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px;
}

.state span {
  font-size: 25px;
}

.weather-wrapper .temperature {
  display: flex;
  padding: 20px;
}

.min-max-temperature-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

.min-max-temperature-wrapper hr {
  width: 25px;
  border: 1px solid #fff;
}

.current-temperature {
  font-size: 60px;
}

.weather-wrapper img {
  width: 125px;
  color: #fff;
  margin-bottom: 10px;
}

.conditions {
  padding: 20px;
}

.conditions span {
  margin: 25px;
}

.fa-icon {
  margin-right: 5px;
}

/*
* Media Queries Section
*/

/*
* Large size screens
*/
@media screen and (max-width: 1024px) {
}

/*
* Tablet sizes
 */
@media screen and (max-width: 768px) {
}

/* 
* Mobile phone sizes
*/
@media screen and (max-width: 414px) {
  .card-container {
    border-radius: 0;
  }
  .conditions span {
    margin: 10px;
  }
}
</style>
