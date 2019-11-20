import { Mutation } from "./types.js";

export default {
  [Mutation.UP_STEP_COUNTER](state) {
    state.counter++;
  },

  [Mutation.DOWN_STEP_COUNTER](state) {
    state.counter--;
  },

  [Mutation.UP_STEP_PROGRESS_BAR](state) {
    state.progressBarValue += 25;
  },

  [Mutation.DOWN_STEP_PROGRESS_BAR](state) {
    state.progressBarValue -= 25;
  },

  [Mutation.SET_EMAIL](state, value) {
    state.email = value;
  },

  [Mutation.SET_FIRST_NAME](state, value) {
    state.firstName = value;
  },

  [Mutation.SET_LAST_NAME](state, value) {
    state.lastName = value;
  },

  [Mutation.SET_GENDER](state, value) {
    state.gender = value;
  },

  [Mutation.SET_COMPANY](state, value) {
    state.company = value;
  },

  [Mutation.SET_TIME_ZONE](state, value) {
    state.timeZone = value;
  },

  [Mutation.SET_DATA_ACCOUNT](state, data) {
    state.dataAccount = data;
  },

  [Mutation.UPDATE_ERROR_MESSAGE](state, { typeValue, textValue }) {
    state.errorMessage.type = typeValue;
    state.errorMessage.text = textValue;
  }
};
