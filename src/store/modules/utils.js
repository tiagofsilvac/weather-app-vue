// initial state
const state = () => ({
  loading: false,
  appBackground: {
    transition: "0.5s",
    backgroundImage: "linear-gradient(to top, #92b9d6, #adb0b3)",
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
  toggleLoading({ commit }, state) {
    commit("setLoading", state);
  },
  changeAppBackground({ commit }, arg) {
    let color;
    switch (arg) {
      case "sn":
        color = "linear-gradient(to top, #92b9d6, #adb0b3)";
        break;
      case "sl":
        color = "linear-gradient(to top, #587387 , #a9adb0)";
        break;
      case "h":
        color = "linear-gradient(to top, #587387 , #a9adb0)";
        break;
      case "t":
        color = "linear-gradient(to top, #1c0940 , #1d3c63)";
        break;
      case "hr":
        color = "linear-gradient(to top, #274159 , #4a6583)";
        break;
      case "lr":
        color = "linear-gradient(to top, #43688a , #788b9e)";
        break;
      case "s":
        color = "linear-gradient(to top, #728db0 , #a8c1e0)";
        break;
      case "hc":
        color = "linear-gradient(to top, #525252 , #7a7a7a)";
        break;
      case "lc":
        color = "linear-gradient(to top, #2a6fa8 , #6ebdff)";
        break;
      case "c":
        color = "linear-gradient(to top, #ff9853 , #ffbb39)";
        break;
    }
    commit("setAppBackground", { transition: "0.5s", backgroundImage: color });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
