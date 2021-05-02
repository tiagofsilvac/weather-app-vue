<template>
  <div id="app" :style="bgColor">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },

  computed: {
    backgroundColorHandler: () => {
      switch (this.weatherData.weather.weatherStateAbbr) {
        case "s": {
          return {
            backgroundColor: "blue",
          };
        }
        default: {
          return {
            backgroundColor: "blue",
          };
        }
      }
    },
    ...mapState({
      bgColor: (state) => state.utils.appBackground,
    }),
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

body {
  margin: 0;
}
</style>
