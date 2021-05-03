import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex, { mapState } from "vuex";
import LocationSearch from "@/components/LocationSearch";
import locationModule from "@/store/modules/location";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("LocationSearch.vue", () => {
  let actions;
  let state;
  let store;

  beforeEach(() => {
    state = {
      defaultWoeid: 742676,
      location: "",
      locationSearchResults: null,
    };

    actions = {
      searchLocation: jest.fn(),
      clearLocationSearchResults: jest.fn(),
      searchLocationWeather: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        locationModule: {
          namespaced: true,
          state,
          actions,
          getters: locationModule.getters,
        },
      },
    });
  });

  it("calls debounceSearch method when user types", async () => {
    const debounceSearch = jest.spyOn(LocationSearch.methods, "debounceSearch");
    const wrapper = shallowMount(LocationSearch, {
      stubs: ["font-awesome-icon"],
      store,
      localVue,
      computed: {
        ...mapState({
          locationSearchResults: state.location.locationSearchResults,
        }),
      },
    });
    const input = wrapper.find("form");
    await input.trigger("input");
    expect(debounceSearch).toBeCalled();
  });

  it("calls inputHandler when user clears input box", async () => {
    const inputHandler = jest.spyOn(LocationSearch.methods, "inputHandler");
    const wrapper = shallowMount(LocationSearch, {
      stubs: ["font-awesome-icon"],
      store,
      localVue,
      computed: {
        ...mapState({
          locationSearchResults: state.location.locationSearchResults,
        }),
      },
    });
    const input = wrapper.find("input");
    await input.setValue("Lis");
    await input.trigger("input");
    expect(inputHandler).toBeCalled();
  });
});
