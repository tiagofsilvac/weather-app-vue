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
    /*
     * bgColor is used to map the appBackground value and
     * set the correct style to the app's background.
     */
    ...mapState({
      bgColor: (state) => state.utils.appBackground,
    }),
  },
};
</script>
