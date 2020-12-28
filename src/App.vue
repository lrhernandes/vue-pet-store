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
  padding-bottom: 200px;
}
#app{
  width: 80%;
  height: 100vh;
  margin: auto;
}
</style>
