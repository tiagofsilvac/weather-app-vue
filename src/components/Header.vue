<template>
  <header class="header">
    <div class="title">{{ title }}</div>
    <p>
      Data from
      <a :href="websiteUrl" target="_blank">{{ website }}</a>
    </p>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "Weather App",
      website: "MetaWeather.com",
      websiteUrl: "https://www.metaweather.com/",
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--card-background-color);
  padding: 25px;
}

.title {
  font-size: 35px;
}

a {
  color: rgb(247, 247, 247);
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
  }

  p {
    padding: 10px;
    margin: 0;
  }
}
</style>
