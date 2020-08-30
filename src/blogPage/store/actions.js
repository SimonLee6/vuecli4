import blogService from "@blogApi/blog.service";
import { SET_BLOGLIST } from "./mutationTypes"
export default {
  getBlogList({ commit }) {
    let blogList = [];
    blogService
      .getBlogList()
      .then(res => {
        console.log(res);
        blogList = res.data.data;
        commit(SET_BLOGLIST, blogList);
      })
      .catch(err => {
        console.log(err);
      })
  }
}