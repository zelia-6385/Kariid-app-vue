<template>
  <div>
    <b-form>
      <b-form-group id="input-group-email">
        <float-label>
          <b-form-input
            id="input-email"
            size="lg"
            v-model="email"
            type="email"
            required
            placeholder="Email"
          ></b-form-input>
        </float-label>

        <!-- Error alert -->
        <b-alert
          show
          variant="danger"
          class="mt-4 text-center"
          v-show="errorMessage.text && errorMessage.type === 'email'"
        >{{ errorMessage.text }}</b-alert>

        <b-form-text class="text-center mt-4 email-text" v-show="counter === 0">
          <h6>We'll email a link to create a password for your new account</h6>
        </b-form-text>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { Mutation } from "@/store/types.js";
// Connection float-label library
import FloatLabel from "vue-float-label/components/FloatLabel";

export default {
  components: {
    "float-label": FloatLabel
  },

  computed: {
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit(Mutation.SET_EMAIL, value);
      }
    },

    counter() {
      return this.$store.state.counter;
    },

    errorMessage() {
      return this.$store.state.errorMessage;
    }
  }
};
</script>
