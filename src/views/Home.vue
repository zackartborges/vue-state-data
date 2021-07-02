<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>Hey !</h1>
    <index-states></index-states>
  </div>
</template>

<script>
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
};
</script>
