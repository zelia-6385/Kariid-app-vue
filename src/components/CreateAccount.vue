<template>
  <div>
    <email-input />
    <metrics-inputs />
    <company-input />
    <timezone-input />
  </div>
</template>

<script>
import Email from "./Email.vue";
import Metrics from "./Metrics.vue";
import Company from "./Company.vue";
import TimeZone from "./TimeZone.vue";

export default {
  components: {
    "email-input": Email,
    "metrics-inputs": Metrics,
    "company-input": Company,
    "timezone-input": TimeZone
  }
};
</script>
