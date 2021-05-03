import { shallowMount } from "@vue/test-utils";
import ErrorMessage from "@/components/ErrorMessage.vue";

describe("ErrorMessage.vue", () => {
  const message = "error message";
  const wrapper = shallowMount(ErrorMessage, {
    stubs: ["font-awesome-icon"],
    propsData: { message: message },
  });

  it("checks if message prop is set to required", () => {
    expect(ErrorMessage.props.message.required).toBe(true);
  });
  it("renders props.message when passed", () => {
    expect(wrapper.text()).toMatch(message);
  });
});
