<template>
  <div class="block">
    <div class="field">
      <input
        v-model="userLocation"
        @submit.prevent="onSubmint"
        type="text"
        class="input is-rounded"
        placeholder="Enter your city"
      />
      <button class="button is-primary is-dark">
        <span class="icon"><i class="fa fa-search"></i></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationChooser",
  data() {
    return {
      userLocation: "",
    };
  },
  methods: {
    onSubmint() {
      sendUserLocation = {
        usrLocation: this.userLocation,
      };
      this.$emit("get-weather", usrLocation);
    },
  },
};
</script>

<style>
</style>
