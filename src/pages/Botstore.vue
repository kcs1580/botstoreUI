<template>
  <v-container grid-list-xl class="container2">
    <v-spacer />
    <v-layout>
      <sort />

      <v-layout row wrap>
        <carousel />

        <v-flex sm12>
          <h2>이번 달 추천</h2>
          <div class="more">
            <v-chip text-color="white" color="primary">More</v-chip>
          </div>
        </v-flex>
        <v-flex lg4 sm12 v-for="(item, index) in users" :key="index">
          <botcard bottom-nav v-bind="item"> </botcard>
        </v-flex>
        <v-flex sm12>
          <h2>"마케팅" 업무 추천 봇</h2>
          <v-chip class="more" text-color="white" color="primary"
            >More</v-chip
          ></v-flex
        >
        <v-flex lg4 sm12 v-for="(item, index) in users" :key="index">
          <botcard bottom-nav v-bind="item"> </botcard>
        </v-flex>
      </v-layout>
    </v-layout>
    <v-spacer />
  </v-container>
</template>

<script>
import NavigationDrawer from "../components/core/NavigationDrawer.vue";
export default {
  components: { NavigationDrawer },
  data() {
    return {
      users: [
        {
          tags1: "마케팅",
          tags2: "커머스",
          name: "금지어 탐색",
          color: "#ba234b",
          dark: true
        },
        {
          tags1: "마케팅",
          tags2: "커머스",
          name: "금지어 탐색",
          color: "#ba234b",
          dark: true
        },
        {
          tags1: "마케팅",
          tags2: "커머스",
          name: "금지어 탐색",
          color: "#ba234b",
          dark: true
        },
        {
          tags1: "마케팅",
          tags2: "커머스",
          name: "금지어 탐색",
          color: "#ba234b",
          dark: true
        },
        {
          tags1: "마케팅",
          tags2: "커머스",
          name: "금지어 탐색",
          color: "#ba234b",
          dark: true
        },
        {
          tags1: "마케팅",
          tags2: "커머스",
          name: "금지어 탐색",
          color: "#ba234b",
          dark: true
        }
      ]
    };
  }
};
</script>
<style>
.container2 {
  padding-right: 280px;
  padding-left: 280px;
  padding-top: 0px;
  padding-bottom: 5px;
}
.more {
  float: right;
}
</style>
