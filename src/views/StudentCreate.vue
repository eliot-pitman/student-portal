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
  <h1>Add Experience</h1>
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

  <button v-on:click="experienceCreate">Add</button>

  <br />

  <h1>Add Skill</h1>
  <div>
    Skill:
    <input type="text" v-model="skillsParams.name" />
  </div>

  <button v-on:click="skillsCreate">Add</button>
</template>
