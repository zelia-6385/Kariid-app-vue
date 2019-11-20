<template>
  <div>
    <b-form>
      <b-form-group id="input-group-zone">
        <float-label label="Select your timezone">
          <b-form-select
            id="input-zone"
            size="lg"
            v-model="timeZone"
            :options="timeZones"
            required
            ref="defaultZone"
          ></b-form-select>
        </float-label>
      </b-form-group>
    </b-form>
  </div>
</template>
<script>
import { Mutation } from "@/store/types.js";
// Connection moment-zone library
import moment from "moment-timezone";
// Connection float-label library
import FloatLabel from "vue-float-label/components/FloatLabel";

export default {
  components: {
    "float-label": FloatLabel
  },

  data() {
    return {
      timeZones: [
        { text: moment.tz.guess(true), value: "" },
        ...moment.tz.names()
      ]
    };
  },

  computed: {
    counter() {
      return this.$store.state.counter;
    },

    timeZone: {
      get() {
        return this.$store.state.timeZone;
      },
      set(value) {
        this.$store.commit(Mutation.SET_TIME_ZONE, value);
      }
    }
  },

  mounted() {
    this.$refs.defaultZone.$parent.labelEl.classList.add("vfl-label-on-input");
  }
};
</script>
