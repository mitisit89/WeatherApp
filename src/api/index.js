import Vue from "vue";
import Vuex from "vuex";
const API_key = "a70e5ca8827286c01fa0d2fd3272043d";

Vue.use(Vuex);

const store = new Vuex.Store({
  actions: {
    async getLocation(context, location_name) {
      const geo_cords = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location_name.coordinates}&limit=5&appid=${API_key}`
      );
      const location = await geo_cords.json();

      const lat = location.lat;
      const lon = location.lon;
      const forecast = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=${API_key}`
      );

      const weather = await forecast.json();
      context.commit("update", weather);
    },
    /* async getForecast(context) {
      console.log(context);
      await context.dispatch("getLocation")
      let lat = geo_codes.lat;
      let lon = geo_codes.lon;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=${API_key}`);
      const weather = await response.json();
      console.log(weather);
      context.commit("update", weather);
     },*/
  },
  mutations: {
    update(state, weather) {
      state.forecast = weather;
    },
  },
  state: {
    forecast: [],
  },
  getters: {
    getWeather(state) {
      return state.forecast;
    },
  },
});
export default store;
