<template>
  <div id="app">
    <div class="pr-main mt-4">
      <!-- Text under header -->
      <header-posts />

      <!-- Header -->
      <h6
        class="text-center mt-4 mb-4 label-text font-weight-bold text-uppercase"
      >
        Create account
      </h6>

      <!-- Progress-bar -->
      <div class="mb-4">
        <b-progress :value="progressBarValue"></b-progress>
      </div>

      <!-- Changing components -->
      <transition name="slide">
        <component :is="dataComponents[counter]"></component>
      </transition>

      <!-- Buttons -->
      <Controls />
    </div>
  </div>
</template>

<script>
// Сomponent connection
import HeaderPosts from "./components/HeaderPosts.vue";
import Email from "./components/Email.vue";
import Metrics from "./components/Metrics.vue";
import Company from "./components/Company.vue";
import TimeZone from "./components/TimeZone.vue";
import CreateAccount from "./components/CreateAccount.vue";
import Controls from "./components/Controls.vue";

export default {
  name: "app",
  components: {
    "header-posts": HeaderPosts,
    Email,
    Metrics,
    Company,
    TimeZone,
    CreateAccount,
    Controls
  },

  data() {
    return {
      dataComponents: [
        "Email",
        "Metrics",
        "Company",
        "TimeZone",
        "CreateAccount"
      ]
    };
  },

  computed: {
    counter() {
      return this.$store.state.counter;
    },

    progressBarValue() {
      return this.$store.state.progressBarValue;
    }
  }
};
</script>
