<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex sm12>
        <h4>이번 달 추천</h4>
      </v-flex>
      <v-flex
        lg3
        sm12
        v-for="(item, index) in users"
        :key="'bottom-nav' + index"
      >
        <botcard bottom-nav v-bind="item"> </botcard>
      </v-flex>
      <v-flex sm12>
        <h4>"마케팅" 업무 추천 봇</h4>
      </v-flex>
      <v-flex
        lg3
        sm12
        v-for="(item, index) in users"
        :key="'bottom-nav' + index"
      >
        <botcard bottom-nav v-bind="item"> </botcard>
      </v-flex>
    </v-layout>
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
          name: "Michael Wang",
          color: "#ba234b",
          dark: true
        },
        {
          jobTitle: "Web Designer",
          name: "Jessie J",
          color: "#e57b09",
          dark: true,
          avatar: {
            src:
              "https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat1&accessoriesType=Sunglasses&hatColor=Red&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
            size: "36"
          }
        },
        {
          jobTitle: "Web Developer",
          name: "Jim J",
          color: "teal",
          dark: true,
          avatar: {
            src:
              "https://avataaars.io/?avatarStyle=Transparent&topType=Hat&accessoriesType=Sunglasses&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Light",
            size: "36"
          }
        },
        {
          jobTitle: "Product Manager",
          name: "John Doe",
          color: "#a51288",
          dark: true,
          cardBgImage: "/static/bg/15.jpg",
          avatar: {
            src:
              "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=SadConcerned&mouthType=ScreamOpen&skinColor=Brown",
            size: "36"
          }
        },
        {
          jobTitle: "Product Manager",
          name: "John Doe",
          color: "#a51288",
          dark: true,
          cardBgImage: "/static/bg/15.jpg",
          avatar: {
            src:
              "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=SadConcerned&mouthType=ScreamOpen&skinColor=Brown",
            size: "36"
          }
        },
        {
          jobTitle: "Product Manager",
          name: "John Doe",
          color: "#a51288",
          dark: true,
          cardBgImage: "/static/bg/15.jpg",
          avatar: {
            src:
              "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=SadConcerned&mouthType=ScreamOpen&skinColor=Brown",
            size: "36"
          }
        }
      ]
    };
  }
};
</script>
