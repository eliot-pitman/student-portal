<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/students/" + this.$route.params.id + ".json").then((response) => {
      console.log(response.data);
      this.student = response.data;
    });
  },
};
</script>
<template>
  <h1>Student Show</h1>
  <p>{{ student }}</p>
</template>
