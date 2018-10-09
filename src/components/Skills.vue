<template>
  <div class="container">

    <form @submit.prevent="addSkill">
      <input type="text" placeholder="Enter a skill you have.."  v-model="skill">
    </form>

    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{data.skill}}</li>
      </ul>
        <p>{{ skillsMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      checked: false,
      skills: [
          { "skill": "Vue.js" },
          { "skill": "Frontend Developer" }
      ]
    }
  },
  methods: {
    addSkill(){
        this.skills.push({skill: this.skill});
        this.skill = '';
    }
  },
  computed: {
    skillsMessage(){
      // get skills number from data object
      let skillNumber = this.skills.length
      if (skillNumber < 1) {
        return `You have no skills yet !`  
      } else if (skillNumber == 1) {
        return `This is the skill that you possess.`
      } else {
        return `These are the ${skillNumber} skills that you possess.`
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

</style>
