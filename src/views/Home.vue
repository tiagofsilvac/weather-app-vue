<template>
  <div class="home">
    <LocationSearch />
    <WeatherCard
      :weather="weatherData.currentWeather"
      :location="weatherData.location"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import LocationSearch from "../components/LocationSearch";
import WeatherCard from "../components/WeatherCard";

export default {
  name: "Home",
  components: {
    LocationSearch,
    WeatherCard,
  },
  computed: {
    ...mapState({
      weatherData: (state) => state.weather.weatherData,
    }),
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
</style>
