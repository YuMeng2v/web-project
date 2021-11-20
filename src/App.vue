
<template>
  <h1 class="title-g">let's press the keyboard!</h1>
  <input @keyup.enter="judge(e.keyCode)">  
</template>

<script>
/* eslint-disable */
import './css/main.css';
import './js/judge.js'
export default {
  name: 'App',
  components: { 
    
  }
}

</script>

<style>     
#app {
  text-align: center;
}
.title-g{
  font-family: 'Praise', cursive;
  font-size: 60px;
}
@import url('https://fonts.googleapis.com/css2?family=Praise&display=swap');

</style>
