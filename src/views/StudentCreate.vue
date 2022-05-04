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
      educationParams: {},
      capstoneParams: {},
      status: "",
      error: false,
    };
  },
  created: function () {
    // axios.get("http://localhost:3000/students.json").then((response) => {
    //   this.students = response.data;
    //   console.log("All Students", this.students);
    // });
  },
  methods: {
    experienceCreate: function () {
      axios
        .post("http://localhost:3000/experience.json", this.experienceParams)
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

  <br />

  <h1>Add Education</h1>
  <div>
    Degree:
    <input type="text" v-model="educationParams.degree" />
  </div>
  <div>
    University Name:
    <input type="text" v-model="educationParams.university_name" />
  </div>
  <div>
    Start date:
    <input type="text" v-model="educationParams.start_date" />
  </div>
  <div>
    End date:
    <input type="text" v-model="educationParams.end_date" />
  </div>
  <div>
    Details:
    <input type="text" v-model="educationParams.details" />
  </div>

  <button v-on:click="educationCreate">Add</button>

  <br />

  <h1>Add Capstone</h1>
  <div>
    Name:
    <input type="text" v-model="capstoneParams.name" />
  </div>
  <div>
    Description:
    <input type="text" v-model="capstoneParams.description" />
  </div>
  <div>
    URL:
    <input type="text" v-model="capstoneParams.url" />
  </div>

  <button v-on:click="capstoneCreate">Add</button>
</template>
