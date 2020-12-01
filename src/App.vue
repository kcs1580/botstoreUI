<template>
  <div>
    <template>
      <v-app id="inspire">
        <div class="app-container">
          <toolbar />
          <v-content> <router-view /></v-content>
        </div>
      </v-app>
    </template>
  </div>
</template>

<script>
export default {
  components: {},
  name: "App",
  data() {
    return {
      drawer: true
    };
  }
};
</script>

<style>
.v-btn:hover:before {
  color: transparent !important;
}
</style>
