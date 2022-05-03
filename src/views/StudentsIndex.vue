<script>
import axios from "axios";
export default {
  data: function () {
    return {
      students: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/students.json").then((response) => {
      this.students = response.data;
      console.log("All Students", this.students);
    });
  },
  methods: {
    destroyExperience: function () {
      axios.delete("/" + experience.id).then((response) => {
        console.log("experience removed", response);
        this.$router.push("/");
      });
    },
    destroyEducation: function () {
      axios.delete("/" + education.id).then((response) => {
        console.log("education removed", response);
        this.$router.push("/");
      });
    },
    destroySkill: function () {
      axios.delete("/" + skill.id).then((response) => {
        console.log("skill removed", response);
        this.$router.push("/");
      });
    },
    destroyCapstone: function () {
      axios.delete("/" + capstone.id).then((response) => {
        console.log("capstone removed", response);
        this.$router.push("/");
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
