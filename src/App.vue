<template>
  <h1>covid</h1>
  <LineChart
    v-if="state.isLoaded"
    v-bind:chartData="state.chartData"
    v-bind:chartOptions="state.chartOptions"
  />
</template>

<script>
import LineChart from "./components/LineChart.vue";
import axios from "axios";
import moment from "moment";
export default {
  name: "App",
  components: {
    LineChart,
  },
  data() {
    return {
      arrPositive: [],
      arrHospitalized: [],
      arrInIcu: [],
      arrOnVentilators: [],
      arrRecovered: [],
      arrDeaths: [],
      state: {
        isLoaded: false,
        chartData: [],
      },
    };
  },
  async mounted() {
    // console.log("mounted in the composition api!");
    const { data } = await axios.get(
      " https://api.covidtracking.com/v1/us/daily.json"
    );
    // console.log(data);
    let positiveDates = [];
    data.forEach((item) => {
      const date = moment(item.date, "YYYYMMDD").format("MM/DD");

      const {
        positive,
        hospitalizedCurrently,
        inIcuCurrently,
        death,
        recovered,
        onVentilatorCurrently,
      } = item;

      this.arrPositive.push({ date, total: positive });
      this.arrHospitalized.push({ date, total: hospitalizedCurrently });
      this.arrInIcu.push({ date, total: inIcuCurrently });
      this.arrOnVentilators.push({ date, total: onVentilatorCurrently });
      this.arrRecovered.push({ date, total: recovered });
      this.arrDeaths.push({ date, total: death });

      positiveDates.push(date);
      // this.state.chartData.push({ positive });

      // console.log(this.arrPositive);
    });

    this.$store.commit("getPositive", this.arrPositive);
    this.state.chartData = positiveDates;
    this.state.isLoaded = true;
  },
};
</script>

<style></style>
