<template>
  <div id="product">
    <Menu/>
    <div class="product-wrapper">
        <Gallery/>
        <Description v-bind:idAnuncio="$route.params.id"/>
    </div>
  </div>
</template>

<script> 
import Menu from '../components/menu';
import Gallery from '../components/product/gallery';
import Description from '../components/product/description';
export default {
    name: 'Product',
    created(){
        console.log(this.$route.params.id);
    },
    components: {
        Menu,
        Gallery,
        Description
    }
}
</script>

<style>
.product-wrapper{
    border: 2px solid blue;
    display: flex;
}
</style>
