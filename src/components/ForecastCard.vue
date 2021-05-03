<template>
  <div id="forecast-card">
    <div class="card-container">
      <div class="date-wrapper">
        <span>{{ formatDate(forecast.date) }}</span>
      </div>
      <div class="weather-forecast-wrapper">
        <div class="state">
          <img
            class="weather-image"
            :src="getWeatherImage(forecast.weatherStateAbbr)"
          />
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
      required: true,
    },
  },
  methods: {
    /*
     * Formats the date in a "2 Tue", "3 Wed" format.
     */
    formatDate(date) {
      return new Date(date).toLocaleString("en-US", {
        weekday: "short",
        day: "numeric",
      });
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: var(--card-background-color);
  box-shadow: var(--box-shadow);
  border-radius: 20px;
}

.date-wrapper span {
  font-weight: bold;
}

.weather-forecast-wrapper .state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin: 10px;
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
  font-size: 18px;
  margin: 5px;
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
    justify-content: space-between;
    padding: 0 25px;
    border-radius: 0;
  }

  .date-wrapper {
    width: 30%;
  }

  .weather-forecast-wrapper {
    width: 40%;
  }

  .weather-conditions-wrapper {
    width: 30%;
  }

  .weather-conditions-wrapper {
    flex-direction: column;
  }
}
</style>
