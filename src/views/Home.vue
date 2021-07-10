<template>
  <div class="home">
    <state-map></state-map>
  </div>
</template>

<script>
// import IndexStates from "../components/IndexStates.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import StateMap from "@/components/StateMap.vue";

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
    // IndexStates,
    StateMap,
  },
};
</script>
