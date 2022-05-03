<script>
import axios from "axios";
export default {
  data: function () {
    return {
      data: [],
    };
  },
  created: function () {
    //  update get request url when we get route from backend people
    axios.get("http://localhost:3000/something.json").then((response) => {
      this.data = response.data;
      console.log("", this.data);
    });
  },
};
</script>

<template>
  <h1>nice</h1>
</template>
