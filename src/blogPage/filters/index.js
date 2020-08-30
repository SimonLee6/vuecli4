import Util from "@util/util";
let myFilters = {
  install: function(Vue) {
    Vue.filter("formatDate", function(dateStr) {
      return Util.formatDate(dateStr);
    });
  }
};
export default myFilters;
