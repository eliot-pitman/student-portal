<script>
import axios from "axios";
export default {
  data: function () {
    return {
      data: [],
      capstoneParams: {},
      status: "",
      error: false,
      capstone: [],
    };
  },
  created: function () {
    axios
      .get("http://localhost:3000/capstone/" + this.$route.params.id + "json")
      .then((response) => {
        this.capstone = response.data;
        console.log("Students Capstone", this.capstone);
      });
  },
  methods: {
    updateCapstone: function (id) {
      axios
        .patch(
          "http://localhost:3000/capstone/" + id + ".json",
          this.capstoneParams
        )
        .then((response) => {
          this.status = response.data;
          console.log("updated capstone", this.status, id, this.capstoneParams);
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
    destroyCapstone: function (id) {
      axios.delete("http://localhost:3000/capstone/" + id).then((response) => {
        console.log("capstone removed", response);
        this.$router.push("/edit");
      });
    },
  },
};
</script>

<template>
  <form v-on:submit.prevent="updateCapstone(capstone.id)">
    <h1>Update Capstone</h1>
    <div>
      Name:
      <input
        :placeholder="`${capstone.name}`"
        type="text"
        v-model="capstoneParams.name"
      />
    </div>
    <div>
      Description:
      <input
        :placeholder="`${capstone.description}`"
        type="text"
        v-model="capstoneParams.description"
      />
    </div>
    <div>
      URL:
      <input
        :placeholder="`${capstone.url}`"
        type="text"
        v-model="capstoneParams.url"
      />
    </div>
    <div>
      Screenshot:
      <input
        :placeholder="`${capstone.screenshot}`"
        type="text"
        v-model="capstoneParams.screenshot"
      />
    </div>
    <div>
      <input type="submit" value="Update" />
    </div>
  </form>
</template>
