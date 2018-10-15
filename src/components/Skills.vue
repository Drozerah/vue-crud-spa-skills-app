<template>
  <div class="container">
    <!-- form  -->
    <form @submit.prevent="checkForm">

      <!-- alert message custom css -->
      <!-- Test
      <transition name="alert-in">
        <p class="alert-validation" v-if="validation.isError">{{ validation.message }}</p>
      </transition>
      -->
      <!-- alert message with animation library -->
      <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <p class="alert-validation" v-if="validation.isError">{{ validation.message }}</p>
      </transition>

      <input type="text" placeholder="Enter a skill you have.." v-model="skill" @input="InputChangeListener" @blur="InputLoseFocusListener">    
    </form>
    <!-- content -->
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
      skill: '',
      skills: [
          { "skill": "Vue.js" },
          { "skill": "Frontend Developer" }
      ],
      validation: {
        isError: false,
        message: '',
        min: 3
      }
    }
  },
  methods: {
    checkForm() {
          let input = this.skill.length
          if (input == 0) {
            // input is empty
            this.validation.message = 'This field is required'
            this.validation.isError = true
          } else if ( input !== 0 && input < this.validation.min ){
            // input not empty and < this.validation.min
            this.validation.message = 'This field must be at least 3 characters'
            this.validation.isError = true
          } else {
            // add skill
            return this.addSkill()
          }
    },
    InputChangeListener() {
      let input = this.skill.length
      if (input !== 0 && input >= this.validation.min ) {
         this.validation.isError = false
         this.validation.message = ''
      }
    },
    InputLoseFocusListener() {
      let input = this.skill.length
      if (input == 0) {
         this.validation.isError = false
         this.validation.message = ''
      }
    },
    addSkill(){
      // happy path     
      this.skills.push({skill: this.skill});
      this.validation.isError = false
      this.skill = ''
    }
  },
  computed: {
    skillsMessage(){
      // get skills number from data object
      let skillNumber = this.skills.length
      if (skillNumber < 1) {
        return `You have no skill yet !`  
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

  /* import animate.css library */
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

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
    margin: 0px;
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

 .alert-validation{
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
    margin: 0px;
    padding: 10px;
    font-size: 12px;
    line-height: 12px;
    font-weight: bold;
  }

/* Error message animation */

/* .alert-in-enter-active {
  animation: bounce-in .5s;
}
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
 */

</style>
