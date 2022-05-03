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
