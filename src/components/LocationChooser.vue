<template>
  <div class="block">
    <form class="field" @submit.prevent="Locator">
      <input
        v-model="userLocation"
      
        type="text"
        class="input is-rounded"
        placeholder="Enter your city and country"
      />
      <button class="button is-primary is-dark">
        <span class="icon"><i class="fa fa-search"></i></span>
      </button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "LocationChooser",
  data() {
    return { 
      userLocation: "",
    };
  },
  methods :{
    ...mapActions(["getLocation"]),
    Locator(){
      this.getLocation({
        coordinates:this.userLocation
      });
    }

  }
}
</script>

<style>
</style>
