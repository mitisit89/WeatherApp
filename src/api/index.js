import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  actions: {
    async getForecast(context, params_for_weahter) {
      let lat = params_for_weahter.lat;
      let lon = params_for_weahter.lon;
      const headers = { "Content-Type": "application/json;charset=UTF-8" };
      const API_key = "a70e5ca8827286c01fa0d2fd3272043d";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=${API_key}`,
        {
          method: "GET",
          headers: headers,
        }
      );
      const weather = await response.json();
      console.log(weather);
      context.commit("update", weather);
    },
  },
  mutations: {
    update(state, weather) {
      state.forefast = weather;
    },
  },
  state: {
    forecast: [],
  },
  getters: {
    getWeather(state) {
      return state.forefast;
    },
  },
});
export default store;
