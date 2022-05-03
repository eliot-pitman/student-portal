<script>
import axios from "axios";
export default {
  data: function () {
    return {
      students: [],
      experienceParams: {},
      skillsParams: {},
      status: "",
      error: false,
    };
  },
  created: function () {
    axios.get("http://localhost:3000/students.json").then((response) => {
      this.students = response.data;
      console.log("All Students", this.students);
    });
  },
  methods: {
    experienceCreate: function () {
      axios
        .post("/experience", this.experienceParams)
        .then((response) => {
          console.log("experience successfully created", response.data, this.experienceParams);
        })
        .catch((error) => {
          console.log("error", error.response.status, error.response.statusText);
          this.status = error.response.status;
        });
    },
    skillsCreate: function () {
      axios
        .post("/skills", this.skillsParams)
        .then((response) => {
          console.log("skills successfully created", response.data, this.skillsParams);
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
