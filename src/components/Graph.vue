<template>
  <div id="graph">
    <div id="chartdiv"></div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

am4core.useTheme(am4themes_dark);
export default {
  mounted() {
    am4core.ready(() => {
      // Themes begin
      // Themes end

      const chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.data = this.graphData;

      // Create axes
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;

      chart.yAxes.push(new am4charts.ValueAxis());

      this.createSeries("Active", "Active", chart);
      this.createSeries("Infected", "Infected", chart);

      //chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarX = new am4core.Scrollbar();
      chart.legend = new am4charts.Legend();
      chart.cursor = new am4charts.XYCursor();
      this.chart = chart;
    }); // end am4core.ready()
  },
  methods: {
    createSeries: function(field, name, chart) {
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = "Date";
      series.name = name;
      series.tooltipText = "{name} {dateX}: [b]{valueY}[/]";
      series.strokeWidth = 2;
    }
  },
  props: ["graphData"],
  watch: {
    graphData: function(newValue) {
      this.chart.data = newValue;
    }
  },
  beforeMount() {},
  beforeDestroy() {}
};
</script>
<style lang="scss" scoped>
#chartdiv {
  // width: 100%;
  height: 500px;
  margin: 50px;
  padding: 10px;
  background: #263859;
  border-radius: 0.5em;
}
</style>
