import Vue from "vue";
import Vuex from "vuex";
import location from "./modules/location";
import weather from "./modules/weather";
import utils from "./modules/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    location,
    weather,
    utils,
  },
});
