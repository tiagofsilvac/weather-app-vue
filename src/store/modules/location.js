import metaWeatherApi from "../../api/meta-weather-api";

// initial state
const state = () => ({
  defaultWoeid: 742676, // Lisbon
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
  /*
   * Fetches locations based on a word query.
   */
  async searchLocation({ commit }, query) {
    try {
      const data = await metaWeatherApi.fetchLocations(query);
      console.log(data);
      commit("setLocationSearchResults", data);
    } catch (error) {
      console.log(error);
    }
  },
  /*
   * Clears locationSearchResults state
   */
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
