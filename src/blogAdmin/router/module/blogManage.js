let blogManageRoutes = {
  path: "blogM",
  name: "blogManage",
  meta: { requireAuth: true },
  component: () =>
    import(
      /* webpackChunkName: "blogManage" */ "@adminViews/blogManage/blogManage.vue"
    ),
  children: [
    {
      path: "addBlog",
      name: "addBlog",
      component: () =>
        import(
          /* webpackChunkName: "addBlog" */ "@adminViews/blogManage/components/addBlog.vue"
        )
    },
    {
      path: "blogDrafts",
      name: "blogDrafts",
      component: () =>
        import(
          /* webpackChunkName: "blogDrafts" */
          "@adminViews/blogManage/components/blogDrafts.vue"
        )
    },
    {
      path: "/blogAdmin/blogM",
      redirect: "/blogAdmin/blogM/addBlog"
    }
  ]
};

export default blogManageRoutes;
