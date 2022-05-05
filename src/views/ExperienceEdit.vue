<script>
import axios from "axios";
export default {
  data: function () {
    return {
      data: [],
      experienceParams: {},
      skillsParams: {},
      status: "",
      error: false,
      experience: [],
    };
  },
  created: function () {
    axios
      .get("http://localhost:3000/experience/" + this.$route.params.id + "json")
      .then((response) => {
        this.experience = response.data;
        console.log("Student Expererience", this.experience);
      });
  },
  methods: {
    updateExperience: function (id) {
      axios
        .patch(
          "http://localhost:3000/experience/" + id + ".json",
          this.experienceParams
        )
        .then((response) => {
          this.status = response.data;
          console.log(
            "updated experience",
            this.status,
            id,
            this.experienceParams
          );
          this.$router.push("/edit");
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
      axios
        .delete("http://localhost:3000/experience/" + id)
        .then((response) => {
          console.log("experience removed", response);
          this.$router.push("/edit");
        });
    },
  },
};
</script>

<template>
  <form v-on:submit.prevent="updateExperience(experience.id)">
    <h1>Update Experience</h1>
    <div>
      Job Title:
      <input
        :placeholder="`${experience.job_title}`"
        type="text"
        v-model="experienceParams.job_title"
      />
    </div>
    <div>
      Company Name:
      <input
        :placeholder="`${experience.company_name}`"
        type="text"
        v-model="experienceParams.company_name"
      />
    </div>
    <div>
      Start Date:
      <input
        :placeholder="`${experience.start_date}`"
        type="text"
        v-model="experienceParams.start_date"
      />
    </div>
    <div>
      End Date:
      <input
        :placeholder="`${experience.end_date}`"
        type="text"
        v-model="experienceParams.end_date"
      />
    </div>
    <div>
      Details:
      <input
        :placeholder="`${experience.details}`"
        type="text"
        v-model="experienceParams.details"
      />
    </div>

    <div>
      <input type="submit" value="Update" />
    </div>
    <button v-on:click="destroyExperience(experience.id)">
      Delete experience
    </button>
  </form>
</template>
