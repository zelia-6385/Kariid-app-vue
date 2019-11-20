import { HTTP } from "@/http-common.js";
import { Action, Mutation } from "./types.js";

export default {
  [Action.VALIDATE_EMAIL]({ state, commit }, email) {
    if (state.errorMessage.text) {
      commit(Mutation.UPDATE_ERROR_MESSAGE, {
        typeValue: "",
        textValue: ""
      });
    }
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      commit(Mutation.UPDATE_ERROR_MESSAGE, {
        typeValue: "email",
        textValue: "Please, fill email or fill out email correctly!!"
      });
    }
  },

  [Action.VALIDATE_TEXT_INPUT]({ commit }, { inputText, input }) {
    const re = /^[а-яa-z]+$/i;
    if (!re.test(inputText)) {
      commit(Mutation.UPDATE_ERROR_MESSAGE, {
        typeValue: `incorrect_${input}`,
        textValue: "Incorrect text. Please, use letters!!"
      });
    }
  },

  [Action.IS_EMAIL_RESERVED]({ state, commit, dispatch }) {
    HTTP.post("/auth/api/check-email/", {
      email: state.email
    })
      .then(resp => {
        const status = resp.status;
        // output of the response status to the console
        console.log(status);

        if (state.counter === 4) {
          // Transferring data to storage after creating an account
          dispatch(Action.LOAD_DATA_ACCOUNT);
          commit(Mutation.UP_STEP_COUNTER);
        } else {
          commit(Mutation.UP_STEP_COUNTER);
          commit(Mutation.UP_STEP_PROGRESS_BAR);
        }
      })
      .catch(e => {
        if (e.response.status === 400) {
          commit(Mutation.UPDATE_ERROR_MESSAGE, {
            typeValue: "email",
            textValue:
              "This email has been craeted already. Please, enter another one!"
          });
        }
      });
  },

  [Action.UP_STEP]({ state, commit, dispatch }) {
    switch (state.counter) {
      // Email step
      case 0: {
        // Validation of the correct spelling of the email address
        dispatch(Action.VALIDATE_EMAIL, state.email);
        if (state.errorMessage.text) return;

        // Checking if mail exists on the server
        dispatch(Action.IS_EMAIL_RESERVED);

        break;
      }

      // Metrics step
      case 1: {
        if (state.errorMessage.text) {
          commit(Mutation.UPDATE_ERROR_MESSAGE, {
            typeValue: "",
            textValue: ""
          });
        }

        // Checking if the fields filled
        if (!state.firstName) {
          commit(Mutation.UPDATE_ERROR_MESSAGE, {
            typeValue: "emptyField_firstName",
            textValue: "Please, write your first name!!"
          });
          return;
        }

        if (!state.lastName) {
          commit(Mutation.UPDATE_ERROR_MESSAGE, {
            typeValue: "emptyField_lastName",
            textValue: "Please, write your last name!!"
          });
          return;
        }

        if (!state.gender) {
          commit(Mutation.UPDATE_ERROR_MESSAGE, {
            typeValue: "emptyField_gender",
            textValue: "Please, mark your gender!!"
          });
          return;
        }

        // Validation of the correct spelling of first name and last name
        dispatch(Action.VALIDATE_TEXT_INPUT, {
          inputText: state.firstName,
          input: "firstName"
        });
        if (state.errorMessage.text) return;

        dispatch(Action.VALIDATE_TEXT_INPUT, {
          inputText: state.lastName,
          input: "lastName"
        });
        if (state.errorMessage.text) return;

        commit(Mutation.UP_STEP_COUNTER);
        commit(Mutation.UP_STEP_PROGRESS_BAR);

        break;
      }

      // Company step
      case 2: {
        commit(Mutation.UP_STEP_COUNTER);
        commit(Mutation.UP_STEP_PROGRESS_BAR);

        break;
      }

      // Time-zone step
      case 3: {
        commit(Mutation.UP_STEP_COUNTER);

        break;
      }
    }
  },

  [Action.DOWN_STEP]({ commit }) {
    commit(Mutation.DOWN_STEP_COUNTER);
    commit(Mutation.DOWN_STEP_PROGRESS_BAR);
  },

  [Action.CREATE_ACCOUNT]({ state, commit, dispatch }) {
    if (state.errorMessage.text) {
      commit(Mutation.UPDATE_ERROR_MESSAGE, {
        typeValue: "",
        textValue: ""
      });
    }

    // Checking if the fields filled
    if (!state.firstName) {
      commit(Mutation.UPDATE_ERROR_MESSAGE, {
        typeValue: "emptyField_firstName",
        textValue: "Please, write your first name!!"
      });
      return;
    }

    if (!state.lastName) {
      commit(Mutation.UPDATE_ERROR_MESSAGE, {
        typeValue: "emptyField_lastName",
        textValue: "Please, write your last name!!"
      });
      return;
    }

    if (!state.gender) {
      commit(Mutation.UPDATE_ERROR_MESSAGE, {
        typeValue: "emptyField_gender",
        textValue: "Please, mark your gender!!"
      });
      return;
    }

    // Validation of the correct spelling of first name and last name
    dispatch(Action.VALIDATE_TEXT_INPUT, {
      inputText: state.firstName,
      input: "firstName"
    });
    if (state.errorMessage.text) return;

    dispatch(Action.VALIDATE_TEXT_INPUT, {
      inputText: state.lastName,
      input: "lastName"
    });
    if (state.errorMessage.text) return;

    // Validation of the correct spelling of the email address
    dispatch(Action.VALIDATE_EMAIL, state.email);
    if (state.errorMessage.text) return;

    // Checking if mail exists on the server
    dispatch(Action.IS_EMAIL_RESERVED);
  },

  [Action.LOAD_DATA_ACCOUNT]({ commit, state }) {
    const { email, firstName, lastName, gender, company, timeZone } = state;
    const accountData = {
      email,
      first_name: firstName,
      last_name: lastName,
      gender,
      company,
      time_zone: timeZone
    };

    // Transferring data to object in storage
    commit(Mutation.SET_DATA_ACCOUNT, accountData);

    // output of the object to the console
    console.log(state.dataAccount);
  }
};
