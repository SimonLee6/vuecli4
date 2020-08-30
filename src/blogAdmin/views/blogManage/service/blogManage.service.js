import $http from "@util/http";
export default {
  addBlog(data) {
    return $http.post("/api/addBlog", data);
  }
};
