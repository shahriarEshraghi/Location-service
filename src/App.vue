<template>
  <v-app>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
 data: () => ({
    //
  })
};
</script>
<style lang="css">
.v-application {
    background-image: url("../src/assets/img/bg.svg")!important;
    background-size:cover!important;
    background-repeat: no-repeat!important;
  }
</style>