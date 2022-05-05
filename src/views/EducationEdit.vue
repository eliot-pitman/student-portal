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
  <dir></dir>
</template>
