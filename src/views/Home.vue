<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>Hey !</h1>
    <index-states></index-states>
  </div>
</template>

<script>
import axios from "axios";
import IndexStates from "../components/IndexStates.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      stateData: [],
    };
  },
  name: "Home",
  components: {
    // HelloWorld,
    IndexStates,
  },
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
