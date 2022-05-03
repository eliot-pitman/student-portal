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
  <div v-for="capstone in capstones" :key="capstone.id">
    <h1>here is your info: {{ data }}</h1>
  </div>
  <div v-for="resume in resumes" :key="resume.id"></div>
</template>
