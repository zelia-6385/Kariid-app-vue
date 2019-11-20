<template>
  <div>
    <b-form>
      <b-form-group id="input-group-company">
        <float-label>
          <b-form-input
            id="input-company"
            v-model="company"
            size="lg"
            required
            placeholder="Company Name (optional)"
          ></b-form-input>
        </float-label>
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
    company: {
      get() {
        return this.$store.state.company;
      },
      set(value) {
        this.$store.commit(Mutation.SET_COMPANY, value);
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
