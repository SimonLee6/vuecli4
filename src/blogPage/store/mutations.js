import { SET_SHOWHEAD, SET_BLOGLIST } from "./mutationTypes";

export default {
  [SET_SHOWHEAD](state, showHead) {
    state.showHead = showHead;
  },
  [SET_BLOGLIST](state, blogList) {
    state.blogList = blogList;
  }
};
