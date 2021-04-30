<template>
  <form
    id="location-search-form"
    class="container"
    @input="debounceSearch"
    @submit.prevent="onSearch"
  >
    <div class="autocomplete">
      <input
        type="text"
        v-model="searchText"
        placeholder="Tokyo..."
        @input="inputHandler"
      />
      <!-- <input type="submit" :disabled="!location" /> -->
      <ul
        class="autocomplete-items"
        v-show="searchText && locationSearchResults"
      >
        <li
          v-if="locationSearchResults && !locationSearchResults.length"
          class="autocomplete-item"
        >
          No results found...
        </li>
        <li
          v-for="location in locationSearchResults"
          :key="location.id"
          class="autocomplete-item"
          @click="onLocationSelect(location)"
        >
          {{ location.title }}
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "LocationSearch",
  data() {
    return {
      searchText: "",
      debounce: null,
    };
  },
  methods: {
    /*
     * Triggers weather data fetch for the selected location.
     */
    onLocationSelect(location) {
      this.searchText = "";
      this.clearLocationSearchResults();
      this.searchLocationWeather(location.woeid);
    },

    inputHandler() {
      if (!this.searchText.length) this.clearLocationSearchResults();
    },

    /*
     * Implements a debounce search for delaying the API request while the user is typing.
     * This allows the request to be made only after the user stops typing for a specific time.
     */
    debounceSearch() {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (this.validateSearchText(this.searchText)) {
          console.log("searching for locations with " + this.searchText);
          this.searchLocation(this.searchText);
        }
      }, 500);
    },

    /*
     * Validates if input search is within specification.
     */
    validateSearchText(text) {
      return text.length > 0;
    },

    ...mapActions("location", ["searchLocation", "clearLocationSearchResults"]),
    ...mapActions("weather", ["searchLocationWeather"]),
  },

  computed: {
    ...mapState({
      locationSearchResults: (state) => state.location.locationSearchResults,
    }),
  },
};
</script>

<style scoped>
.container {
  margin: 35px;
}

.autocomplete {
  position: relative;
}

.autocomplete-items {
  padding: 10px;
  margin: 0;
  border: 1px solid #eeeeee;
  max-height: 300px;
  overflow: auto;
}

.autocomplete-item {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-item:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
