<template>
  <div id="weather-card" class="container">
    <div class="location-date">
      <h2 class="location">
        {{ `${location.name}, ${location.parentName}` }}
      </h2>
      <h4 class="date">{{ new Date(weather.date) | formatDate }}</h4>
    </div>
    <div class="weather-state"></div>
    <div class="weather-temperatures">
      <h1>{{ weather.currentTemp }}</h1>
      <div class="min-max-temperatures">
        <h5>{{ weather.maxTemp }}</h5>
        <h5>{{ weather.minTemp }}</h5>
      </div>
    </div>
    <div class="weather-conditions">
      <h4>{{ weather.humidity }}%</h4>
      <h4>{{ weather.windSpeed }}</h4>
      <h4>{{ weather.windDirectionCompass }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCard",
  props: {
    location: {
      type: Object,
      default: () => {},
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
  },
};
</script>

<style scoped>
.container {
  background-color: red;
  width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
