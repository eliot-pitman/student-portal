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
      capstone: {},
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

      <a :href="`/edit/${experience.id}`">Edit this</a>

      <button v-on:click="destroyExperience(experience.id)">Delete Experience</button>
      <a href="/create">Add to Experience</a>
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

        <a :href="`/edit/${education.id}`">Edit this</a>
      </form>
      <button v-on:click="destroyEducation(education.id)">Delete</button>
      <a href="/create">Add to Education</a>
    </div>
  </div>

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
