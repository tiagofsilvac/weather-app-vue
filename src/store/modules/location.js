import metaWeatherApi from "../../api/meta-weather-api";

// initial state
const state = () => ({
  location: "",
  locationSearchResults: null,
});

// getters
const getters = {};

// mutations
const mutations = {
  setLocationSearchResults(state, results) {
    state.locationSearchResults = results;
  },
};

// actions
const actions = {
  async searchLocation({ commit }, query) {
    const data = await metaWeatherApi.fetchLocations(query);
    console.log(data);
    commit("setLocationSearchResults", data);
  },
  clearLocationSearchResults({ commit }) {
    commit("setLocationSearchResults", null);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
