<script>
// import { defineComponent } from "vue";
import { Line } from "vue3-chart-v2";

export default {
  name: "SportChart",
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      // type: Object,
      // required: false,
      responsive: false,
    },
    cases: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      state: {
        chartData: {
          labels: this.chartData,
          datasets: [
            {
              label: "Human 1",
              data: this.cases,
            },
            // {
            //   label: "Human 2",
            //   data: [10, 20, 2, 4],
            // },
          ],
        },
        chartOptions: {
          responsive: false,
        },
      },
      positiveArray: [],
    };
  },
  mounted() {
    this.renderChart(this.state.chartData, this.state.chartOptions);
    // console.log(this.$store.state.arrPositive);
    // console.log(this.chartData);
    console.log(this.cases);
  },
  // async created() {
  //   await this.$store.state.arrPositive.map((item) => {
  //     this.positiveArray.push(item.date);
  //   });
  //   console.log(this.positiveArray);
  // },
};
</script>
