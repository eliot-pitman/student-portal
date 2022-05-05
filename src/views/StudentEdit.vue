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
      educations: [],
      skill: {},
      capstones: [],
      skills: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/experience.json").then((response) => {
      this.experiences = response.data;
      console.log("Student Expererience Array", this.experiences);
    });
    axios.get("http://localhost:3000/skills.json").then((response) => {
      this.skills = response.data;
      console.log("Student skills Array", this.skills);
    });
    axios.get("http://localhost:3000/educations.json").then((response) => {
      this.educations = response.data;
      console.log("Student Educations Array", this.educations);
    });
    axios.get("http://localhost:3000/capstones.json").then((response) => {
      this.capstones = response.data;
      console.log("Student Capstones Array", this.capstones);
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
    updateSkill: function (id) {
      axios
        .patch("http://localhost:3000/skills/" + id + ".json", this.skillsParams)
        .then((response) => {
          this.status = response.data;
          console.log("updated skill", this.status, id, this.skillParams);
        })
        .catch((error) => {
          console.log("error", error.response.status, error.response.statusText);
          this.status = error.response.status;
        });
    },
    destroyExperience: function (id) {
      axios.delete("http://localhost:3000/experience/" + id).then((response) => {
        console.log("experience removed", response);
        window.location.reload();
      });
    },
    destroyEducation: function (id) {
      axios.delete("http://localhost:3000/educations/" + id).then((response) => {
        console.log("education removed", response);
        window.location.reload();
      });
    },
    destroySkill: function (id) {
      axios.delete("http://localhost:3000/skills/" + id).then((response) => {
        console.log("skill removed", response);
        window.location.reload();
      });
    },
    destroyCapstone: function (id) {
      axios.delete("http://localhost:3000/capstones/" + id).then((response) => {
        console.log("capstone removed", response);
        window.location.reload();
      });
    },
  },
};
</script>

<template>
  <h1>Update Experience</h1>
  <div class="container" v-for="experience in experiences" :key="experience.id">
    <div class="card-columns card bg-light">
      <div>
        Job Title:
        <h3>{{ experience.job_title }}</h3>
      </div>
      <div>
        Company Name:
        <h3>{{ experience.company_name }}</h3>
      </div>
      <div>
        Start Date:
        <h3>{{ experience.start_date }}</h3>
      </div>
      <div>
        End Date:
        <h3>{{ experience.end_date }}</h3>
      </div>
      <div>
        Details:
        <h3>{{ experience.details }}</h3>
      </div>

      <a :href="`/experience/${experience.id}`">Edit this</a>

      <button v-on:click="destroyExperience(experience.id)">Delete Experience</button>
      <a href="/create">Add more Experience</a>
    </div>
  </div>
  <h1>Update Skills</h1>
  <div class="container" v-for="skill in skills" :key="skill.id">
    <div class="card-columns card bg-light">
      <div>
        <h3>{{ skill.skill_name }}</h3>
      </div>
      <a :href="`/edit/${skill.id}`">Edit this</a>

      <button v-on:click="destroySkill(skill.id)">Delete skill</button>
      <a href="/create">Add to Skills</a>
    </div>
  </div>
  <h1>Update Education</h1>
  <div class="container" v-for="education in educations" :key="education.id">
    <div class="card-columns card bg-light">
      <form>
        <div>
          Degree:
          <h3>{{ education.degree }}</h3>
        </div>
        <div>
          University/College:
          <h3>{{ education.university_name }}</h3>
        </div>
        <div>
          Start Date:
          <h3>{{ education.start_date }}</h3>
        </div>
        <div>
          End Date:
          <h3>{{ education.end_date }}</h3>
        </div>
        <div>
          Details:
          <h3>{{ education.details }}</h3>
        </div>

        <a :href="`/education/${education.id}`">Edit this</a>
      </form>
      <button v-on:click="destroyEducation(education.id)">Delete</button>
      <a href="/create">Add more Education</a>
    </div>
  </div>
  <h1>Update Capstones</h1>
  <div class="container" v-for="capstone in capstones" :key="capstone.id">
    <div class="card-columns card bg-light">
      <div>
        Name:
        <h3>{{ capstone.name }}</h3>
      </div>
      <div>
        Description:
        <h3>{{ capstone.description }}</h3>
      </div>
      <div>
        Website:
        <h3>{{ capstone.url }}</h3>
      </div>
      <div>
        Screenshot:
        <h3>{{ capstone.screenshot }}</h3>
      </div>

      <a :href="`/edit/${capstone.id}`">Edit this</a>

      <button v-on:click="destroyCapstone(capstone.id)">Delete</button>
      <a href="/create">Add more Capstones</a>
    </div>
  </div>
</template>
