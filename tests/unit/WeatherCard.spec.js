import { shallowMount } from "@vue/test-utils";
import WeatherCard from "@/components/WeatherCard.vue";

describe("WeatherCard.vue", () => {
  const location = "Lisbon, Portugal";
  const weather = {
    currentTemp: 20.199999,
    date: "2021-05-02",
    weatherStateAbbr: "s",
  };
  const wrapper = shallowMount(WeatherCard, {
    stubs: ["font-awesome-icon"],
    propsData: { location, weather },
  });

  it("test if location prop is set to required", () => {
    expect(WeatherCard.props.location.required).toBe(true);
  });

  it("test if weather prop is set to required", () => {
    expect(WeatherCard.props.weather.required).toBe(true);
  });

  it("tests if formatDate is outputing date in the correct format", async () => {
    const formatedDate = await wrapper.vm.formatDate(new Date("2021-05-02"));
    expect(formatedDate).toMatch("Sunday, May 2, 2021");
  });

  it("tests if date is displayed correctly", async () => {
    expect(wrapper.find(".date").text()).toMatch("Sunday, May 2, 2021");
  });

  it("tests if weather image is loaded", async () => {
    const img = wrapper.findAll(".weather-image");
    expect(img.length).toBe(1);
  });

  it("tests if current temperature is correctly displayed and rounded to a whole number", async () => {
    expect(wrapper.find(".current-temperature").text()).toBe("20º");
  });
});
