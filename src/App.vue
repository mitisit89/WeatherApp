<template>
  <div id="app" class="container is-max-desktop">
    <div class="box">
      <loader />
      <location-chooser
        class="colum is-half-mobile"
      />
      <div class="colums is-mobile">
        <today-weather-card class="card" />

        <div class="title">Forecast for 5 days</div>
        <daily-forecast-card class="block" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import DailyForecastCard from "./components/DailyForecastCard.vue";
import Loader from "./components/Loader.vue";
import LocationChooser from "./components/LocationChooser.vue";
import TodayWeatherCard from "./components/TodayWeatherCard.vue";
export default {
  name: "App",
  components: { LocationChooser, DailyForecastCard, TodayWeatherCard, Loader },
  computed: { ...mapMutations([]) },
};
</script>

<style lang="scss">
html {
  background-color: #eeeeee;
}
.container {
  background-color: hsl(206, 70%, 96%);
}
</style>
