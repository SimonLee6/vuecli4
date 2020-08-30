<template>
  <div class="home" ref="home">
    <div class="form-wrap">
      <el-input v-model="name"></el-input>
      <el-input v-model="cnName"></el-input>
      <div v-for="item in list" :key="item.name">{{ item.name }}</div>
      <el-button @click="add"></el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { Validator, before } from "@/plugins/validator/validator";
// import * as Util from "@/util/test";
import { mapState } from "vuex";
// import _ from "lodash";
import "@/util/leetcode";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      cnName: "",
      list: [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }]
    };
  },
  created() {
    console.log(this.$el, this.$refs.home);
  },
  mounted() {
    this.test();
    // console.log(this.$el);
    console.log(this.$el, this.$refs.home);
    console.log(this.user);
    axios.get("/api/user");
  },
  methods: {
    // validateFunc() {
    //   let validate = new Validator();

    //   validate.add(this.text, [
    //     { strategies: "isNotEmpty", errMsg: "为空" },
    //     { strategies: "maxLength:1", errMsg: "最大长度为1" }
    //   ]);
    //   let errMsg = validate.start();
    //   if (errMsg) {
    //     this.$message.error(errMsg);
    //     return false;
    //   }
    //   return true;
    // },
    add() {
      this.list = [
        { name: "4" },
        { name: "25" },
        { name: "36" },
        { name: "44" },
        { name: "22" }
      ];
      // this.list[0] = 9;
      console.log(this.list);
      // axios.post("/api/addUser", {
      //   name: this.name,
      //   cnName: this.cnName
      // })
    },
    test() {
      console.log("123" + undefined);
      console.log(parseInt("010"));
      function Person(prop) {
        this.prop = prop;
        // return [];
      }
      Person.prototype.start = function() {
        console.log(this.prop);
      };
      let person = new Person("props");
      console.log(person);
      // let per = Object.create(Person);
      console.log("----------------");
      // console.log(Object.__proto__ === Function.prototype);
      console.log({} instanceof Function);
    }
  },
  computed: {
    ...mapState(["user"])
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.home {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  @include wh(100%, 100%);
  .form-wrap {
    @include wh(300px, 200px);
  }
}
</style>
