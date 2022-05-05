<script>
import axios from "axios";
export default {
  data: function () {
    return {
      data: [],
      student: {},
      educationParams: {},
      capstoneParams: {},
      status: "",
      error: false,
      experienceParams: {},
      skillsParams: {},
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
    experienceCreate: function () {
      axios
        .post("/experience", this.experienceParams)
        .then((response) => {
          console.log(
            "experience successfully created",
            response.data,
            this.experienceParams
          );
        })
        .catch((error) => {
          console.log(
            "error",
            error.response.status,
            error.response.statusText
          );
          this.status = error.response.status;
        });
    },
    skillsCreate: function () {
      axios
        .post("/skills", this.skillsParams)
        .then((response) => {
          console.log(
            "skills successfully created",
            response.data,
            this.skillsParams
          );
        })
        .catch((error) => {
          console.log(
            "error",
            error.response.status,
            error.response.statusText
          );
          this.status = error.response.status;
        });
    },
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
  <div>
    <img :src="student.photo_url" v-bind:alt="student.first_name" />
    <p>Name: {{ student.first_name }} {{ student.last_name }}</p>
    <p>E-mail: {{ student.email }}</p>
    <p>Phone Number: {{ student.phone_number }}</p>
    <p>Bio: {{ student.bio }}</p>
    <p>LinkedIn: {{ student.linkedin_url }}</p>
    <p>Twitter: {{ student.twitter }}</p>
    <p>Personal Blog/Website: {{ student.personal_url }}</p>
    <p>Online Resume: {{ student.resume_url }}</p>
    <p>Github: {{ student.github }}</p>
    <p>Experience: {{ student.experiences }}</p>
    <p>Education: {{ student.educations }}</p>
    <p>Skills: {{ student.skills }}</p>
    <p>Capstone: {{ student.capstones }}</p>
  </div>
  <div v-for="capstone in capstones" :key="capstone.id">
    <h1>here is your info: {{ data }}</h1>
  </div>
  <div v-for="resume in resumes" :key="resume.id"></div>
</template>
