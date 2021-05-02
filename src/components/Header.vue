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
  background-color: rgba(255, 255, 255, 0.25);

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
  color: rgb(92, 92, 92);
  text-shadow: none;
}

/* 
* Mobile phone sizes
*/
@media screen and (max-width: 414px) {
  .header {
    padding: 15px;
  }
  .title {
    font-size: 25px;
    color: #fff;
  }

  p {
    padding: 10px;
    margin: 0;
  }
}
</style>
