// initial state
const state = () => ({
  loading: false,
  appBackground: {
    backgroundImage: "var(--app-default-bg-color)",
  },
});

// getters
const getters = {};

// mutations
const mutations = {
  setLoading(state, arg) {
    state.loading = arg;
  },
  setAppBackground(state, cssObject) {
    state.appBackground = cssObject;
  },
};

// actions
const actions = {
  /*
   * Handles loading spinner state.
   * state: Boolean
   * true enables the spinner
   * false disables the spinner
   */
  toggleLoading({ commit }, state) {
    commit("setLoading", state);
  },
  /*
   * Handles app's background color based on current weather state.
   * arg: String with weather state abbreviation
   * if no valid state is passed, the default colors are applied
   */
  changeAppBackground({ commit }, arg) {
    let color;
    switch (arg) {
      case "sn":
        color = "var(--app-snow-bg-color)";
        break;
      case "sl":
        color = "var(--app-sleet-bg-color)";
        break;
      case "h":
        color = "var(--app-hail-bg-color)";
        break;
      case "t":
        color = "var(--app-thunderstorms-bg-color)";
        break;
      case "hr":
        color = "var(--app-heavy-rain-bg-color)";
        break;
      case "lr":
        color = "var(--app-light-rain-bg-color)";
        break;
      case "s":
        color = "var(--app-showers-bg-color)";
        break;
      case "hc":
        color = "var(--app-heavy-cloud-bg-color)";
        break;
      case "lc":
        color = "var(--app-light-cloud-bg-color)";
        break;
      case "c":
        color = "var(--app-clear-bg-color)";
        break;
      default:
        color = "var(--app-default-bg-color)";
    }
    commit("setAppBackground", { backgroundImage: color });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
