<template>
  <div class="container">
    <!-- form  -->
    <form @submit.prevent="checkForm">

      <!-- alert message with animation library -->
      <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <p class="alert-validation" v-if="validation.isError">{{ validation.message }}</p>
      </transition>

      <input type="text" placeholder="Enter a skill you have.." v-model="skill" @input="InputChangeListener" @blur="InputLoseFocusListener">    
    </form>
    <!-- content -->
    <div div class="holder">
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="skill of skills" :key="skill['.key']">
            {{ skill.name }}
            <i class="material-icons" @click="removeSkill(skill['.key'], skill.name)" title="Remove skill">remove_circle_outline</i>
          </li>
        </transition-group>
      </ul>
    <div>
      <p>{{ skillsCounterMessage }}</p>
    </div>
    </div>
    
  </div>
</template>

<script>

import { skillRef } from '@/firebase'

export default {
  name: 'Skills',
  // DB object
  firebase: {
    skills: skillRef
  },
  data() {
    return {
      skill: '',
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
      // submit to firebase 
      skillRef.push({
        name: this.skill, 
        edit: false
      })
      this.validation.isError = false
      this.skill = ''
      
    },
    removeSkill(key, skillName){
      // ask confirmation
      let response = confirm(`\nYour are about to remove "${skillName}"\n\nPlease confirm OK or Cancel.`)
      // remove element from DB 
      if (response == true) return skillRef.child(key).remove() 
    }
  },
  computed: {
    skillsCounterMessage(){
      // get skills number from DB object
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
/* import Google icon */
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

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

  li i {
    float: right;
  }

  li i:hover{
    color: #3EB3F6;
    cursor: pointer;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
    margin: 0px;
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
  
</style>
