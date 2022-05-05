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
      Details:
      <input :placeholder="`${education.details}`" type="text" v-model="eeducationParams.details" />
    </div>

    <div>
      <input type="submit" value="Update" />
    </div>
    <button v-on:click="destroyEducation(education.id)">Delete education</button>
  </form>
</template>
