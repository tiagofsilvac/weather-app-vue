<template>
  <header class="header">
    <div class="title">Weather App</div>
    <p>
      Data from
      <a href="https://www.metaweather.com/" target="_blank">MetaWeather.com</a>
    </p>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-color: blue;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 35px;
  color: #fff;
}

.p {
  color: #fff;
}

a {
  color: lightblue;
}
</style>
