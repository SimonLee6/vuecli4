import $http from "@util/http";
export default {
  getBlogList() {
    return $http.get("/api/getBlogList");
  }
};
