<template>
  <v-container fluid class="top">
    <v-layout>
      <v-flex>
        <router-link to="/"
          ><v-btn flat color="orange">BotStore</v-btn></router-link
        >
        <router-link to="/community"><v-btn flat>커뮤니티</v-btn></router-link>
        <router-link to="/download"><v-btn flat>자료실</v-btn></router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.v-btn__content {
  font-size: 20px;
  margin: 5px;
}
.top {
  background-color: #f5f5f5;
  padding: 5px;
  text-align: center;
}
</style>
