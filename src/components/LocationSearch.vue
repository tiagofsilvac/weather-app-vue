<template>
  <form
    id="location-search-form"
    class="container"
    @input="debounceSearch"
    @submit.prevent="onSearch"
  >
    <div class="autocomplete">
      <input
        class="search-input"
        type="text"
        v-model="searchText"
        placeholder="Search a city..."
        @input="inputHandler"
      />
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
      if (!this.searchText.length) {
        this.clearLocationSearchResults();
      }
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
      isLoading: (state) => state.utils.loading,
    }),
  },
};
</script>

<style scoped>
.container {
  margin: 20px;
}

.autocomplete {
  position: relative;
  z-index: 999;
}

.autocomplete .search-input {
  width: 300px;
  height: 32px;
  padding: 5px;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: 0.4s;
  font-size: 20px;
  padding-left: 20px;
}

.autocomplete .search-input:focus {
  background-color: rgba(255, 255, 255, 0.85);
}

.autocomplete-items {
  position: absolute;
  z-index: 10;
  padding: 10px;
  margin: 0;
  border: 1px solid #eeeeee;
  max-height: 300px;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.95);

  color: #000;
  width: 300px;
}

.autocomplete-item {
  list-style: none;
  text-align: left;
  padding: 6px 2px;
  cursor: pointer;
  text-shadow: none;
}

.autocomplete-item:hover {
  background-color: rgb(192, 192, 192);
  color: white;
}
</style>
