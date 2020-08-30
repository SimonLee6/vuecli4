import Vue from "vue";
import VueRouter from "vue-router";
import blogHome from "../views/blogHome.vue";
// import App from "../App.vue";
import store from "@/blogPage/store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: blogHome
  },
  {
    path: "/test",
    name: "test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/amuse",
    name: "amuse",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "amuse" */ "../views/amuse/amuse.vue")
  },
  {
    path: "/blog",
    name: "blog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/blog/blog.vue")
  },
  {
    path: "/detail/:id",
    name: "blogDetail",
    component: () =>
      import(
        /* webpackChunkName: "blogDetail" */
        "../views/blog/blogDetail.vue"
      )
  },
  {
    path: "/",
    redirect: "/home"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

function scroll() {
  if (this.scrollY > 400) {
    store.commit("set_showHead", true);
  } else {
    store.commit("set_showHead", false);
  }
}

router.beforeEach((to, from, next) => {
  if (to.name === "home") {
    store.commit("set_showHead", false);
    window.addEventListener("scroll", scroll);
  } else {
    window.removeEventListener("scroll", scroll);
    store.commit("set_showHead", true);
  }
  next();
});

export default router;
