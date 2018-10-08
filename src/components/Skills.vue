<template>
  <div class="skills">
    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{index}}. {{data.skill}}</li>
      </ul>

      <!-- Add this -->
      <div v-bind:class="{ alert: showAlert, 'info': showClass }">
         {{ 'Alert : '+ showAlert }} 
      </div>
      <button @click="toggleAlert">ToggleAlert</button>
      <div v-bind:class="borderObject" v-bind:style="{ backgroundColor: bgColor}"> {{ borderObject.orangeBorder ? 'Orange border' : 'Purple border' }} </div>
      <button @click="toggleBorder">ToggleBorder</button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
          { "skill": "Vue.js" },
          { "skill": "Frontend Developer" }
      ],
      showAlert: false,
      showClass: true,
      borderObject: {
        orangeBorder: true,
        purpleBorder: true
      },
      bgColor: '#343436',
    }
  },
  methods: {
    toggleAlert() {
      this.showAlert = !this.showAlert
    },
    toggleBorder() {
      this.borderObject.orangeBorder = !this.borderObject.orangeBorder
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
.skills{
  background-color: #333333;
  padding: 20px;
}

.info{
  padding: 15px;
  color:white;
  background-color: #252526;
}

.alert {
  background-color: yellow;
  color:black;

}


.purpleBorder{
  padding: 15px;
  color:white;
  background-color: #252526;
  border: 1px solid purple;
}
.orangeBorder{
  border: 1px solid orange;
  color:white;

}

button {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
