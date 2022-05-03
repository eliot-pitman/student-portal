<script>
import axios from "axios";
export default {
  data: function () {
    return {
      data: [],
      student: {},
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
