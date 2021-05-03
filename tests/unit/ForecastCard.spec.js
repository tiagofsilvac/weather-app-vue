import { shallowMount } from "@vue/test-utils";
import ForecastCard from "@/components/ForecastCard.vue";

describe("ForecastCard.vue", () => {
  const forecast = {
    date: "2021-05-01",
    weatherStateAbbr: "s",
  };
  const wrapper = shallowMount(ForecastCard, {
    stubs: ["font-awesome-icon"],
    propsData: { forecast },
  });

  it("test if forecast prop is set to required", () => {
    expect(ForecastCard.props.forecast.required).toBe(true);
  });

  it("tests if formatDate is outputing date in the correct format", async () => {
    const formatedDate = await wrapper.vm.formatDate(new Date("2021-05-01"));
    expect(formatedDate).toMatch("1 Sat");
  });

  it("tests if date is displayed correctly", async () => {
    expect(wrapper.find(".date-wrapper").text()).toMatch("1 Sat");
  });

  it("tests if weather image is loaded", async () => {
    const img = wrapper.findAll(".weather-image");
    expect(img.length).toBe(1);
  });
});
