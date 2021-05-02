<template>
  <div class="home">
    <LocationSearch />
    <div v-if="isLoading" class="loading">
      <beat-loader color="#fff"></beat-loader>
    </div>
    <div v-else-if="!isLoading && !weatherData">error :(</div>
    <div v-else>
      <WeatherCard
        :weather="weatherData.currentWeather"
        :location="weatherData.location"
      />
      <div class="forecast-cards-container">
        <ForecastCard
          v-for="dayForecast in weatherData.forecast"
          :key="dayForecast.id"
          :forecast="dayForecast"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
import LocationSearch from "../components/LocationSearch";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";

export default {
  name: "Home",
  components: {
    BeatLoader,
    LocationSearch,
    WeatherCard,
    ForecastCard,
  },
  methods: {
    /*
     * Fetches initial data for a defined location at app start.
     */
    fetchInitialData() {
      this.$store.dispatch("weather/searchLocationWeather", this.defaultWoeid);
    },
  },
  computed: {
    ...mapState({
      weatherData: (state) => state.weather.weatherData,
      isLoading: (state) => state.utils.loading,
      defaultWoeid: (state) => state.location.defaultWoeid,
    }),
  },
  created() {
    this.fetchInitialData();
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.forecast-cards-container {
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  grid-gap: 20px;
  margin-bottom: var(--default-margin);
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}

/*
* Media Queries Section
*/

/*
* Large size screens
*/
@media screen and (max-width: 1024px) {
  .home {
    width: 65%;
    margin: 0 auto;
  }

  .forecast-cards-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

/*
* Tablet sizes
 */
@media screen and (max-width: 768px) {
  .home {
    width: 95%;
    margin: 0 auto;
  }

  .forecast-cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/*
* Mobile phone sizes
*/
@media screen and (max-width: 414px) {
  .home {
    width: 100%;
    margin: 0 auto;
  }

  .forecast-cards-container {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    max-width: 100%;
  }
}
</style>
