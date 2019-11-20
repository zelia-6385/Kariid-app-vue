<template>
  <!-- Congratulations -->
  <div v-if="counter === 5" class="congratulations">
    <h1 class="congratulations-header mb-4">Congratulations! Your account has been created!</h1>
    <div>
      <img src="@/assets/congratulations.jpg" alt class="congratulations-img" />
    </div>
  </div>
  <div class="page-text" v-else>
    <!-- Changing page text -->
    <div v-show="counter === 0" class="text-center header-text">
      <h4>Create your VINchain account.</h4>
      <h4>Easy to use anytime, anywhere for everyone.</h4>
    </div>

    <div v-show="counter === 1" class="text-center header-text">
      <h4>Let's introduce ourselves!</h4>
      <h4>Your name will be displayed in all reports, documents, etc.</h4>
    </div>

    <div v-show="counter === 2" class="text-center header-text">
      <h4>Tracking company vehicals?(optional)</h4>
    </div>

    <div v-show="counter === 3" class="text-center header-text">
      <h4>Set your time zone</h4>
    </div>

    <div v-show="counter === 4">
      <h4 class="text-center header-text">Check your data</h4>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  }
};
</script>
