import Vue from "vue";
import Vuex from "vuex";
const API_key = "a70e5ca8827286c01fa0d2fd3272043d";


Vue.use(Vuex);

const store = new Vuex.Store({
  actions: {
    async getLocation(context, location_name) {
      console.log(location_name.coordinates);
      const headers = {"Content-Type": "application/json;charset=UTF-8"};
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location_name.coordinates}&limit=5&appid=${API_key}`);
      const geo_codes = await response.json()
      console.log(geo_codes);
      context.commit('getForecast',geo_codes)
    },
    async getForecast(context) {
      console.log(context);
      //const geo_codes=await context.dispatch("getLocation")
      let lat = geo_codes.lat;
      let lon = geo_codes.lon;
      const headers = {"Content-Type": "application/json;charset=UTF-8"};

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=${API_key}`);
      const weather = await response.json();
      console.log(weather);
      context.commit("update", weather);
    },
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
