<template>
  <div id="app">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <router-view/>
  </div>
</template>

<script>
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    Skills
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  /* import animate.css library */
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
  background-color: white;
}

nav {
  padding: 20px 20px 20px 0;
}

body, html {
  margin: 0;
  height: 100%;
}

#app {
    width: 50%;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  color:#333;
  font-weight: bold;
  margin-right: 15px;
}

nav a:hover{
   background: #E7E7E7;
}

.router-link-exact-active{
  border-bottom: 3px solid #333;
}
</style>
