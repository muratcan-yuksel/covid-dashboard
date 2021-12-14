import { createStore } from "vuex";

export default createStore({
  state: {
    arrPositive: [],
    arrHospitalized: [],
    arrInIcu: [],
    arrOnVentilators: [],
    arrRecovered: [],
    arrDeaths: [],
  },
  mutations: {
    getPositive(state, newData) {
      state.arrPositive = newData;
    },
  },
  actions: {},
  modules: {},
});
