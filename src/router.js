import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Calc from "./views/Calc.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      props: true
    },
    {
      path: "/Calc",
      name: "Calc",
      component: Calc,
      props: true
    },
    { path: "*", redirect: "/" }
  ],
  mode: "history"
});
