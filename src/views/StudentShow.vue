<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
    };
  },
  created: function () {
<<<<<<< HEAD
    axios
      .get("http://localhost:3000/students/" + this.$route.params.id + ".json")
      .then((response) => {
        console.log(response.data);
        this.student = response.data;
      });
=======
    axios.get("http://localhost:3000/students/1.json").then((response) => {
      console.log(response.data);
      this.student = response.data;
    });
>>>>>>> 4fbc601e92be3a96837ab1b89d8338026e90a04e
  },
};
</script>
<template>
  <h1>Student Show</h1>
  <!-- <img :src="student.photo_url" v-bind:alt="student.first_name" /> -->
  <p>Name: {{ student.first_name }} {{ student.last_name }}</p>
  <p>E-mail: {{ student.email }}</p>
  <p>Phone Number: {{ student.phone_number }}</p>
  <p>Bio: {{ student.short_bio }}</p>
  <p>LinkedIn: {{ student.linkedin_url }}</p>
  <p>Twitter: {{ student.twitter_handle }}</p>
  <p>Personal Blog/Website: {{ student.website_url }}</p>
  <p>Online Resume: {{ student.online_resume_url }}</p>
  <p>Github: {{ student.github_url }}</p>
  <p>Experience: {{ student.experiences }}</p>
  <p>Education: {{ student.educations }}</p>
  <p>Skills: {{ student.skills }}</p>
  <p>Capstone: {{ student.capstones }}</p>
</template>
