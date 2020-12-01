// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import "vuetify/dist/vuetify.min.css";

import Vuetify from "vuetify";

import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./styles/global.css";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

import "@mdi/font/css/materialdesignicons.css";
import toolbar from "./components/core/Toolbar.vue";
import breadcrumbs from "./components/core/Breadcrumbs.vue";
import botcard from "./components/Botcard.vue";
import sort from "./components/Sort.vue";
import navbar from "./components/Navbar.vue";
import carousel from "./components/Carousel.vue";

Vue.component("toolbar", toolbar);
Vue.component("breadcrumbs", breadcrumbs);
Vue.component("botcard", botcard);
Vue.component("sort", sort);
Vue.component("navbar", navbar);
Vue.component("carousel", carousel);

// setupComponents(Vue);

Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  data: {
    themeColor: "#1D2939",
    userEmail: "cskim@rbrain.co.kr",
    userPassword: "123456"
  },
  icons: {
    iconfont: "mdi" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },

  methods: {},

  created() {}
});
