<template>
  <div class="state-map">
    <h1>Map Of The United States</h1>
    <div id="map_election" style="position: relative; width: 500px; height: 300px"></div>
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
    };
  },
  name: "StateMap",
  props: {},
  mounted: function () {
    this.CreateMap();
  },
  methods: {
    CreateMap: function () {
      axios.get("api/states").then((response) => {
        this.states = response.data;
        console.log("all state data:", this.states);
      });
      var election = new Datamap({
        scope: "usa",
        element: document.getElementById("map_election"),
        geographyConfig: {
          highlightBorderColor: "#bada55",
          popupTemplate: function (geography, data) {
            return '<div class="hoverinfo">' + geography.fillKey + data.electoralVotes + " ";
          },
          highlightBorderWidth: 3,
        },

        fills: {
          defaultFill: "#EDDC4E",
        },
        data: {
          AZ: {
            fillKey: "Republican",
            electoralVotes: 5,
          },
          CO: {
            fillKey: "Light Democrat",
            electoralVotes: 5,
          },
          DE: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          FL: {
            fillKey: "UNDECIDED",
            electoralVotes: 29,
          },
          GA: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          HI: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          ID: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          IL: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          IN: {
            fillKey: "Republican",
            electoralVotes: 11,
          },
          IA: {
            fillKey: "Light Democrat",
            electoralVotes: 11,
          },
          KS: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          KY: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          LA: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          MD: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          ME: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          MA: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          MN: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          MI: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          MS: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          MO: {
            fillKey: "Republican",
            electoralVotes: 13,
          },
          MT: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          NC: {
            fillKey: "Light Republican",
            electoralVotes: 32,
          },
          NE: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          NV: {
            fillKey: "Heavy Democrat",
            electoralVotes: 32,
          },
          NH: {
            fillKey: "Light Democrat",
            electoralVotes: 32,
          },
          NJ: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          NY: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          ND: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          NM: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          OH: {
            fillKey: "UNDECIDED",
            electoralVotes: 32,
          },
          OK: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          OR: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          PA: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          RI: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          SC: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          SD: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          TN: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          TX: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          UT: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          WI: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          VA: {
            fillKey: "Light Democrat",
            electoralVotes: 32,
          },
          VT: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          WA: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          WV: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          WY: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          CA: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          CT: {
            fillKey: "Democrat",
            electoralVotes: 32,
          },
          AK: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          AR: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
          AL: {
            fillKey: "Republican",
            electoralVotes: 32,
          },
        },
      });
      election.labels();
    },
  },
};
</script>
