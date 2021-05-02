<template>
  <div id="forecast-card">
    <div v-if="!forecast">Loading...</div>
    <div v-else class="card-container">
      <div class="date-wrapper">
        <span>{{ new Date(forecast.date) | formatDate }}</span>
      </div>
      <div class="weather-forecast-wrapper">
        <div class="state">
          <img :src="getWeatherImage(forecast.weatherStateAbbr)" />
          <span>{{ forecast.weatherStateName }}</span>
        </div>
      </div>
      <div class="weather-conditions-wrapper">
        <div class="min-max-temperature">
          <span>{{ forecast.minTemp | roundNumber }}º</span>
          <hr size="15" />
          <span>{{ forecast.maxTemp | roundNumber }}º</span>
        </div>
        <div class="humidity-wind">
          <span
            ><font-awesome-icon icon="tint" class="fa-icon" />{{
              forecast.humidity
            }}%</span
          >
          <span
            ><font-awesome-icon icon="wind" class="fa-icon" />{{
              forecast.windSpeed | speedConverter
            }}
            <small>km/h</small>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { weatherImageHelper } from "../mixins/weather-image-helper";
export default {
  name: "ForecastCard",
  mixins: [weatherImageHelper],
  props: {
    forecast: {
      type: Object,
      default: () => {},
    },
  },
  filters: {
    formatDate(date) {
      return date.toLocaleString("en-US", {
        weekday: "long",
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
#forecast-card {
  width: 100%;
  max-width: 175px;
}

.card-container {
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.date-wrapper span {
  font-weight: bold;
}

.weather-forecast-wrapper .state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  font-size: 18px;
}

.weather-forecast-wrapper img {
  width: 40px;
}

.weather-conditions-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.weather-conditions-wrapper .min-max-temperature {
  display: flex;
  justify-content: center;
  align-items: center;
}

.weather-conditions-wrapper .min-max-temperature span {
  margin: 5px;
  font-size: 18px;
}

.weather-conditions-wrapper .min-max-temperature hr {
  border: 1px solid #fff;
}

.weather-conditions-wrapper .humidity-wind {
  display: flex;
  flex-direction: column;
  font-size: 12px;
}

.weather-conditions-wrapper .humidity-wind span {
  margin: 5px;
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
  #forecast-card {
    max-width: 100%;
  }
}

/* 
* Mobile phone sizes
*/
@media screen and (max-width: 414px) {
  #forecast-card {
    max-width: 100%;
  }

  .card-container {
    flex-direction: row;
    justify-content: space-around;
    border-radius: 0;
  }

  .weather-conditions-wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
