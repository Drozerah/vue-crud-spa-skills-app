<template>
  <div class="skills">
    <div>{{ name }}</div> <br>
    <div>
      <!-- Add this -->
      {{ btnState ? 'The button is disabled' : 'The button is active'}}
    </div>
    <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button>
    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{index}}. {{data.skill}}</li>
      </ul>
    </div>
    <!-- Add these 2 lines -->
    <p v-if="skills.length >= 1">You have more than 1 skill</p>
    <p v-else>You have less than or equal to 1 skill</p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      name: 'Vue Interpolation',
      btnState: true,
      skills: [
        { "skill": "Vue.js" },
        { "skill": "Frontend Developer" }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
