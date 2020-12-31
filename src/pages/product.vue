<template>
  <div id="product">
    <Menu/>
    <div class="product-wrapper">
        <Gallery/>
        <Description v-bind:idAnuncio="$route.params.id"/>
    </div>
    <Info v-bind:idAnuncio="$route.params.id"/>
    <Destaques/>
  </div>
</template>

<script> 
import Menu from '../components/menu';
import Gallery from '../components/product/gallery';
import Destaques from '../components/home/destaques';
import Description from '../components/product/description';
import Info from '../components/product/info';
export default {
    name: 'Product',
    created(){
        console.log(this.$route.params.id);
    },
    components: {
        Menu,
        Gallery,
        Description,
        Info,
        Destaques
    }
}
</script>

<style>
.product-wrapper{
    display: flex;
    align-items: center;
}
</style>
