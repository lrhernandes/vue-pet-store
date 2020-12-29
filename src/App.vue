<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/footer';
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
body{
  padding: 0px;
  margin: 0px;
  font-family: 'Roboto Slab', serif;
  color: #525252;
}
#app{
  width: 80%;
  height: 100vh;
  margin: auto;
}
.btn-blue-large{
  background: #408dcc;
  width: 100%;
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  border: 0px;
  border-radius: 2px;
  color: white;
  padding: 10px;
}
.btn-blue-large:hover{
  filter: brightness(90%);
  cursor: pointer;
}
</style>
