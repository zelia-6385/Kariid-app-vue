import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    progressBarValue: 25,
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    company: "",
    timeZone: "",
    dataAccount: {},
    errorMessage: {
      type: "",
      text: ""
    }
  },

  mutations,
  actions
});
