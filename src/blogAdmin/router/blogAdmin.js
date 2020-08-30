import Vue from "vue";
import VueRouter from "vue-router";
import admin from "../admin";
import blogManageRoutes from "./module/blogManage";
Vue.use(VueRouter);

const routes = [
  {
    path: "/blogAdmin",
    name: "blogAdmin",
    component: admin,
    children: [blogManageRoutes]
  }
  // {
  //   path: "/blogAdmin/blogManage",
  //   name: "blogManage",
  //   meta: {
  //     requireAuth: true
  //   },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "blogManage" */ "../views/blogManage/blogManage.vue"
  //     )
  // },
  // {
  //   path: "blogAdmin",
  //   name: "blogAdmin",
  //   meta: { requireAuth: true },
  //   component: () =>
  //     import(/* webpackChunkName: "admin" */ "../views/blogAdmin.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

// function scroll() {
//   if (this.scrollY > 400) {
//     store.commit("set_showHead", true);
//   } else {
//     store.commit("set_showHead", false);
//   }
// }

// router.beforeEach((to, from, next) => {
//   if (to.name === "home") {
//     store.commit("set_showHead", false);
//     window.addEventListener("scroll", scroll);
//   } else {
//     window.removeEventListener("scroll", scroll);
//     store.commit("set_showHead", true);
//   }
//   next();
// });

export default router;
