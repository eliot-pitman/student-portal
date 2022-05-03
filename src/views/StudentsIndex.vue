<script>
import axios from "axios";
export default {
  data: function () {
    return {
      students: [],
      educationParams: [],
      capstoneParams: [],
      status: "",
      error: false,
      capstone: [],
    };
  },
  created: function () {},
  methods: {
    educationCreate: function () {
      axios
        .post("/education", this.educationParams)
        .then((response) => {
          this.status = response.data;
          console.log("Education created", this.educationParams);
        })
        .catch((error) => {
          console.log("error", error.response.status, error.response.statusText);
          this.status = error.response.status;
        });
    },
    capstoneCreate: function () {
      axios
        .post("/capstone", this.capstoneParams)
        .then((response) => {
          this.status = response.data;
          console.log("Capstone created", this.educationParams);
        })
        .catch((error) => {
          console.log("error", error.response.status, error.response.statusText);
          this.status = error.response.status;
        });
    },
  },
};
</script>

<template>
  <div v-for="capstone in capstones" :key="capstone.id">
    <h1>here is your info: {{ data }}</h1>
  </div>
  <div v-for="resume in resumes" :key="resume.id"></div>
</template>
