<template>
  <div class="card">
    <p class="title">Moscow</p>
    <div class="card-content is-mobile">
      <div class="title">
        <span class="icon"> <i class="fas fa-bolt"></i></span>
        <i class="fas fa-plus">9</i>
        <i class="fas fa-sun"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodayWeatherCard",
  props: {},
};
</script>

<style lang='scss'>
.fas {
  font-size: 3rem;
}
</style>
