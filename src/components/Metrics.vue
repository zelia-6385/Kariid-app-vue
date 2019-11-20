<template>
  <div>
    <b-form class="metrics">
      <b-form-group id="group-metrics-1">
        <float-label>
          <b-form-input
            id="input-metrics-1"
            v-model="firstName"
            size="lg"
            required
            placeholder="First Name"
          />
        </float-label>
      </b-form-group>

      <!-- Error alert -->
      <b-alert
        show
        variant="danger"
        class="mt-4 text-center"
        v-show="
          (errorMessage.text && errorMessage.type === 'emptyField_firstName') ||
            (errorMessage.text && errorMessage.type === 'incorrect_firstName')
        "
      >{{ errorMessage.text }}</b-alert>

      <b-form-group id="group-metrics-2">
        <float-label>
          <b-form-input
            id="input-metrics-2"
            v-model="lastName"
            size="lg"
            required
            placeholder="Last Name"
          ></b-form-input>
        </float-label>
      </b-form-group>

      <!-- Error alert -->
      <b-alert
        show
        variant="danger"
        class="mt-4 text-center"
        v-show="
          (errorMessage.text && errorMessage.type === 'emptyField_lastName') ||
            (errorMessage.text && errorMessage.type === 'incorrect_lastName')
        "
      >{{ errorMessage.text }}</b-alert>

      <b-form-group id="group-metrics-3">
        <float-label label="Gender">
          <b-form-select
            id="input-metrics-3"
            v-model="gender"
            size="lg"
            :options="genders"
            required
          ></b-form-select>
        </float-label>
      </b-form-group>
    </b-form>

    <!-- Error alert -->
    <b-alert
      show
      variant="danger"
      class="mt-4 text-center"
      v-show="errorMessage.text && errorMessage.type === 'emptyField_gender'"
    >{{ errorMessage.text }}</b-alert>
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

  data() {
    return {
      genders: [{ text: "Gender", value: "" }, "Male", "Femail"],
      selected: ""
    };
  },

  computed: {
    firstName: {
      get() {
        return this.$store.state.firstName;
      },
      set(value) {
        this.$store.commit(Mutation.SET_FIRST_NAME, value);
      }
    },

    lastName: {
      get() {
        return this.$store.state.lastName;
      },
      set(value) {
        this.$store.commit(Mutation.SET_LAST_NAME, value);
      }
    },

    gender: {
      get() {
        return this.$store.state.gender;
      },
      set(value) {
        this.$store.commit(Mutation.SET_GENDER, value);
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
