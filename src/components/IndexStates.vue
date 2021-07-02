<template>
  <div class="index-method">
    <h1>States Render:</h1>
    <div v-for="state in states" v-bind:key="state.id">
      {{ state.state }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      states: [],
    };
  },
  name: "IndexStates",
  props: {},
  created: function () {
    this.indexStates();
  },
  methods: {
    indexStates: function () {
      axios.get("api/states").then((response) => {
        this.states = response.data;
        console.log("all state data:", this.states);
      });
    },
  },
};
</script>
