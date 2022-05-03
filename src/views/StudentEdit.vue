<script>
import axios from "axios";
export default {
  data: function () {
    return {
      data: [],
      student: {},
      students: [],
      experienceParams: {},
      skillsParams: {},
      status: "",
      error: false,
      experience: {},
      education: {},
      skill: {},
      capstone: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/students.json").then((response) => {
      this.students = response.data;
      console.log("All Students", this.students);
    });
  },
  methods: {
    destroyExperience: function (id) {
      axios.delete("/" + id).then((response) => {
        console.log("experience removed", response);
        this.$router.push("/");
      });
    },
    destroyEducation: function (id) {
      axios.delete("/" + id).then((response) => {
        console.log("education removed", response);
        this.$router.push("/");
      });
    },
    destroySkill: function (id) {
      axios.delete("/" + id).then((response) => {
        console.log("skill removed", response);
        this.$router.push("/");
      });
    },
    destroyCapstone: function (id) {
      axios.delete("/" + id).then((response) => {
        console.log("capstone removed", response);
        this.$router.push("/");
      });
    },
  },
};
</script>

<template>
  <form v-on:submit.prevent="updateExperience()">
    <h1>Update Experience</h1>
    <div>
      Job Title:
      <input type="text" v-model="experienceParams.job_title" />
    </div>
    <div>
      Company Name:
      <input type="text" v-model="experienceParams.company_name" />
    </div>
    <div>
      Start Date:
      <input type="text" v-model="experienceParams.start_date" />
    </div>
    <div>
      End Date:
      <input type="text" v-model="experienceParams.end_date" />
    </div>
    <div>
      Details:
      <input type="text" v-model="experienceParams.details" />
    </div>

    <div>
      <input type="submit" value="Update" />
    </div>
  </form>
  <button v-on:click="destroyExperience(experience)">Delete experience</button>

  <br />
  <form v-on:submit.prevent="updateSkill()">
    <h1>Add Skill</h1>
    <div>
      Skill:
      <input type="text" v-model="skillsParams.name" />
    </div>
  </form>
  <button v-on:click="destroySkill(skill)">Delete skill</button>
</template>
