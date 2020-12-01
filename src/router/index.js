import Vue from "vue";
import Router from "vue-router";

import botstore from "../pages/Botstore.vue";
import community from "../pages/Community.vue";
import download from "../pages/Download.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Botstore",
      component: botstore
    },
    {
      path: "/community",
      name: "Community",
      component: community
    },
    {
      path: "/download",
      name: "Download",
      component: download
    }
  ]
});
