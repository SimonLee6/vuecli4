import axios from "axios";
axios.interceptors.request.use(function(config) {
  return config;
});
// let http = {
//   get(url) {
//     return axios.get(url);
//   }
// };

export default axios;
