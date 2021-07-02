<template>
  <div class="state-map">
    <h1>Map Of The United States</h1>
    <div id="container" style="position: relative; width: 500px; height: 300px"></div>
  </div>
</template>

<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/topojson/1.6.9/topojson.min.js"></script>
<script src="node_modules/datamaps/dist/datamaps.world.min.js"></script>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      states: [],
    };
  },
  name: "StateMap",
  props: {},
  created: function () {
    this.GetStateData;
    this.CreateMap;
  },
  methods: {
    GetStateData: function () {
      axios.get("api/states").then((response) => {
        this.states = response.data;
        console.log("all state data:", this.states);
      });
    },
    CreateMap: function () {
      var map = new Datamap({ element: document.getElementById("container"), scope: "usa" });
    },
  },
};
</script>
