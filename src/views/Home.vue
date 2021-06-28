<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>Hey !</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  name: "Home",
  components: {
    // HelloWorld,
  },
  created: function () {},
  methods: {},
};
</script>
