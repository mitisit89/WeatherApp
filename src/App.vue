<template>
  <div id="app" class="container">
    <div class="colums is-mobile">
      <weather-card class="colum is-one-third is-offset-x" />
      <location-chooser class="colum is-one-third" />
    </div>
  </div>
</template>

<script>
import LocationChooser from "./components/LocationChooser.vue";
import WeatherCard from "./components/TodayWeatherCard.vue";
export default {
  name: "App",
  components: { WeatherCard, LocationChooser },
};
</script>

<style>
</style>
