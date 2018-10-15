<template>

    <div class="about container">
        <h1>{{ aboutTitle }}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
    </div>

</template>

<script>
export default {
  name: 'About',
  data(){
      return{
          aboutTitle: 'This is an about page'
      }
  }
}
</script>

<style scoped>

.about{
    padding: 20px;
}

</style>