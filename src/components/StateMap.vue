<template>
  <div class="body">
    <h1>Map Of The United States</h1>
    <div id="map_election" style="position: relative; width: 800px; height: 500px"></div>
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
  created: function () {
    this.getStateData();
  },
  // mounted: function () {
  //   this.CreateMap();
  // },
  methods: {
    getStateData: function () {
      axios.get("api/states").then((response) => {
        this.states = response.data;
        let reformattedData = {};
        this.states.forEach((object) => {
          reformattedData[object["state_code"]] = {
            medianHouseholdIncome: object["median_household_income"],
            sharePopulationInMetroAreas: object["share_population_in_metro_areas"],
            sharePopulationWithHighSchoolDegree: object["share_population_with_high_school_degree"],
            shareUnemployedSeasonal: object["share_unemployed_seasonal"],
            stateAbbrev: object["state_abbrev"],
          };
        });
        // var mappedStates = this.states.forEach(function(state) {
        //   state.state_code
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
        console.log("all state data:", this.states);
        console.log("reformatted data:", reformattedData);
      });
    },
  },
};
</script>

<style>
html {
  background-color: darkkhaki;
}
</style>
