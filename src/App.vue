
<template>
  <h1 class="title-g">let's press the keyboard!</h1>
  
</template>
<script>
import './css/main.css';
import './js/judge.js'
import {Howl,Howler} from 'howler'
import {reaction2key} from './main.js' 
export default {
  name: 'App',
  components: { 
    
  }
}
document.addEventListener('keydown',function(e){
    //alert(e.key=="a");//以字符的形式返回
    let a = reaction2key(e.key);
    var audi = a['sound'] ,color=a['color'];
    console.log(a);
    if(audi) audi.play();
})
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
