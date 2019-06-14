import Vue from "vue";
import Router from "vue-router";
import SignIn from "./views/SignIn.vue";
import Success from "./views/Success.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "signIn",
      component: SignIn
    },
    {
      path: "/success",
      name: "success",
      component: Success
    }
  ]
});
