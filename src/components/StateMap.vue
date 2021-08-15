<template>
  <div class="body">
    <div id="map_election" style="position: center; width: 800px; height: 500px"><h1>Map Of The United States</h1></div>
  </div>
</template>

<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/topojson/1.6.9/topojson.min.js"></script>
<script src="node_modules/datamaps/dist/datamaps.world.min.js"></script>
<script>
// var map = new Datamap({ element: document.getElementById("map_election") });
</script>
<script>
import axios from "axios";
import Datamap from "datamaps";
export default {
  data: function () {
    return {
      states: [],
      // reformattedData: {},
    };
  },
  name: "StateMap",
  props: {},
  // created: function () {
  //   this.getStateData();
  // },
  mounted: function () {
    this.getStateData();
  },
  methods: {
    getStateData: function () {
      axios.get("api/states").then((response) => {
        this.states = response.data;
        let reformattedData = {};
        for (var index = 0, len = this.states.length; index < len; index++) {
          reformattedData[this.states[index]["state_code"]] = {
            //reformatted data[0["state_code"]]
            medianHouseholdIncome: [this.states[index]["median_household_income"]],
            sharePopulationInMetroAreas: [this.states[index]["share_population_in_metro_areas"]],
            sharePopulationWithHighSchoolDegree: [this.states[index]["share_population_with_high_school_degree"]],
            shareUnemployedSeasonal: [this.states[index]["share_unemployed_seasonal"]],
            stateAbbrev: [this.states[index]["state_abbrev"]],
          };
          // console.log("example:", reformattedData[index]);
        }
        console.log("all state data:", reformattedData);
        // this.states.forEach((object) => {
        //   reformattedData[object["state_code"]] = {
        //     medianHouseholdIncome: object["median_household_income"],
        //     sharePopulationInMetroAreas: object["share_population_in_metro_areas"],
        //     sharePopulationWithHighSchoolDegree: object["share_population_with_high_school_degree"],
        //     shareUnemployedSeasonal: object["share_unemployed_seasonal"],
        //     stateAbbrev: object["state_abbrev"],
        //   };
        //   console.log("example:", reformattedData);
        // });
        var election = new Datamap({
          scope: "usa",
          element: document.getElementById("map_election"),
          geographyConfig: {
            highlightBorderColor: "#bada55",
            popupTemplate: function (geography, data) {
              return (
                '<div class="hoverinfo">' +
                `${geography.properties.name} <br> Median Household Income: ${data.medianHouseholdIncome} <br> Share Population in Metro Areas: ${data.sharePopulationInMetroAreas} <br> Share Population with High School Degrees: ${data.sharePopulationWithHighSchoolDegree} <br> Share Unemployed Seasonal: ${data.shareUnemployedSeasonal}`
                // geography.properties.name +
                // "<br>" +
                // " Median Household Income: " +
                // data.medianHouseholdIncome +
                // // "<br>" +
                // " Share Population in Metro Areas: " +
                // data.sharePopulationInMetroAreas +
                // " "
              );
            },
            highlightBorderWidth: 3,
          },
          fills: {
            defaultFill: "#EDDC4E",
          },

          data: reformattedData,
        });
        election.labels();

        // console.log("reformatted data:", reformattedData);
      });
    },
  },
};
</script>

<style>
html {
  background-color: darkkhaki;
}
.body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
