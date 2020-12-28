<template>
  <div id="home">
    <Menu/>
    <Banner/>
    <Parceiros/>
    <Destaques/>
    <Contato/>
  </div>
</template>

<script>
  import Menu from '../components/menu';
  import Banner from '../components/home/banner';
  import Parceiros from '../components/home/parceiros';
  import Destaques from '../components/home/destaques';
  import Contato from '../components/home/contact';
  export default {
    name: 'Home',
    components: {
      Menu,
      Banner,
      Parceiros,
      Destaques,
      Contato
    }
  }
</script>

<style>
</style>
