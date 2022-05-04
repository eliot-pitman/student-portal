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
      experiences: [],
      education: {},
      skill: {},
      capstone: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/experience.json").then((response) => {
      this.experiences = response.data;
      console.log("Student Expererience Array", this.experiences);
    });
  },
  methods: {
    updateExperience: function (id) {
      axios
        .patch("http://localhost:3000/experience/" + id + ".json", this.experienceParams)
        .then((response) => {
          this.status = response.data;
          console.log("updated experience", this.status, id, this.experienceParams);
        })
        .catch((error) => {
          console.log("error", error.response.status, error.response.statusText);
          this.status = error.response.status;
        });
    },
    destroyExperience: function (id) {
      axios.delete("http://localhost:3000/experience/" + id).then((response) => {
        console.log("experience removed", response);
        this.$router.push("/edit");
      });
    },
    destroyEducation: function (id) {
      axios.delete("http://localhost:3000/educations/" + id).then((response) => {
        console.log("education removed", response);
        this.$router.push("/edit");
      });
    },
    destroySkill: function (id) {
      axios.delete("http://localhost:3000/skills/" + id).then((response) => {
        console.log("skill removed", response);
        this.$router.push("/edit");
      });
    },
    destroyCapstone: function (id) {
      axios.delete("http://localhost:3000/capstones/" + id).then((response) => {
        console.log("capstone removed", response);
        this.$router.push("/edit");
      });
    },
  },
};
</script>

<template>
  <div v-for="experience in experiences" :key="experience.id">
    <form v-on:submit.prevent="updateExperience(experience.id)">
      <h1>Update Experience</h1>
      <div>
        Job Title:
        <input :placeholder="`${experience.job_title}`" type="text" v-model="experienceParams.job_title" />
      </div>
      <div>
        Company Name:
        <input :placeholder="`${experience.company_name}`" type="text" v-model="experienceParams.company_name" />
      </div>
      <div>
        Start Date:
        <input :placeholder="`${experience.start_date}`" type="text" v-model="experienceParams.start_date" />
      </div>
      <div>
        End Date:
        <input :placeholder="`${experience.end_date}`" type="text" v-model="experienceParams.end_date" />
      </div>
      <div>
        Details:
        <input :placeholder="`${experience.details}`" type="text" v-model="experienceParams.details" />
      </div>

      <div>
        <input type="submit" value="Update" />
      </div>
    </form>
    <button v-on:click="destroyExperience(experience.id)">Delete experience</button>
  </div>

  <br />
  <form v-on:submit.prevent="updateSkill()">
    <h1>Update Skill</h1>
    <div>
      Skill:
      <input type="text" v-model="skillsParams.name" />
    </div>
    <div>
      <input type="submit" value="Update" />
    </div>
  </form>
  <button v-on:click="destroySkill(skill)">Delete skill</button>

  <br />
  <form v-on:submit.prevent="updateEducation()">
    <h1>Update Education</h1>
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

    <div>
      <input type="submit" value="Update" />
    </div>
  </form>
  <button v-on:click="destroyEducation(education)">Delete education</button>

  <br />
  <form v-on:submit.prevent="updateEducation()">
    <h1>Update Capstone</h1>
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
    <div>
      <input type="submit" value="Update" />
    </div>
  </form>
  <button v-on:click="destroyCapstone(capstone)">Delete capstone</button>
</template>
