<template>
  <div
    class="wrapper-create-account"
    @click="createAccount"
    v-if="counter === 4"
  >
    <b-button class="create-account-button" size="lg">
      Create account
    </b-button>
  </div>

  <div class="wrapper-buttons" v-else>
    <b-button
      class="left-button"
      size="lg"
      variant="light"
      v-show="counter > 0 && counter < 4"
      @click="downStep"
      >&lt; PREV STEP</b-button
    >
    <b-button
      class="right-button-skip"
      @click="upStep"
      v-if="counter === 2 && company === ''"
      >SKIP THIS STEP &gt;</b-button
    >
    <b-button class="right-button-next" size="lg" @click="upStep" v-else
      >NEXT STEP &gt;</b-button
    >
  </div>
</template>

<script>
import { Action } from "@/store/types.js";

export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },

    company() {
      return this.$store.state.company;
    }
  },

  methods: {
    upStep() {
      return this.$store.dispatch(Action.UP_STEP);
    },

    downStep() {
      return this.$store.dispatch(Action.DOWN_STEP);
    },

    createAccount() {
      return this.$store.dispatch(Action.CREATE_ACCOUNT);
    }
  }
};
</script>
