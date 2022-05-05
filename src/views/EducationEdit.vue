<script>
import axios from "axios";
export default {
  data: function () {
    return {
      data: [],
      educationParams: {},
      skillsParams: {},
      status: "",
      error: false,
      education: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/educations/" + this.$route.params.id + ".json").then((response) => {
      this.education = response.data;
      console.log("Student Education", this.education);
    });
  },
  methods: {
    updateEducation: function (id) {
      axios
        .patch("http://localhost:3000/educations/" + id + ".json", this.educationParams)
        .then((response) => {
          this.status = response.data;
          console.log("updated education", this.status, id, this.educationParams);
          this.$router.push("/edit");
        })
        .catch((error) => {
          console.log("error", error.response.status, error.response.statusText);
          this.status = error.response.status;
        });
    },
    destroyEducation: function (id) {
      axios.delete("http://localhost:3000/education/" + id).then((response) => {
        console.log("education removed", response);
        this.$router.push("/edit");
      });
    },
  },
};
</script>

<template>
  <form v-on:submit.prevent="updateEducation(education.id)">
    <h1>Update Education</h1>
    <div>
      University Name:
      <input :placeholder="`${education.university_name}`" type="text" v-model="educationParams.university_name" />
    </div>
    <div>
      Start Date:
      <input :placeholder="`${education.start_date}`" type="text" v-model="educationParams.start_date" />
    </div>
    <div>
      End Date:
      <input :placeholder="`${education.end_date}`" type="text" v-model="educationParams.end_date" />
    </div>
    <div>
      Details:
      <input :placeholder="`${education.details}`" type="text" v-model="eeducationParams.details" />
    </div>
    <div>
      Degree:
      <input :placeholder="`${education.degree}`" type="text" v-model="eeducationParams.degree" />
    </div>

    <div>
      <input type="submit" value="Update" />
    </div>
    <button v-on:click="destroyEducation(education.id)">Delete education</button>
  </form>
</template>
