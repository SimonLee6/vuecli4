const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 多页面配置
  pages: {
    index: {
      entry: "src/blogPage/main.js",
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "木子muzi丶"
    },
    blogAdmin: {
      entry: "src/blogAdmin/blogAdmin.js",
      template: "public/blogAdmin.html",
      // 在 dist/index.html 的输出
      filename: "blogAdmin.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "博客后台管理"
    }
  },
  pwa: {
    iconPaths: {
      favicon32: "favicon.jpg",
      favicon16: "favicon.jpg"
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.0.100:3000",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        },
        logLevel: "debug"
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/scss/index.scss";`
      },
      postcss: {
        loader: "px2rem-loader",
        test: /\.css$|\.scss$/,
        option: {
          remUnit: 100
        },
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 60 // 换算的基数（我的需要应用到大屏，设计图为1920*1080，一般移动端的设计图为750px，这个数值为37.5
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("@blog", resolve("./src/blogPage"))
      .set("@admin", resolve("./src/blogAdmin"))
      .set("@adminComponents", resolve("./src/blogAdmin/components"))
      .set("@adminViews", resolve("./src/blogAdmin/views"))
      .set("@blogViews", resolve("./src/blogPage/views"))
      .set("@blogApi", resolve("./src/blogPage/api/module"))
      .set("@blogComponents", resolve("./src/blogPage/components"))
      .set("@util", resolve("./src/util"));
  }
};
