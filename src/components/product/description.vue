<template>
  <div id="description">
        <div class="title-discount-wrapper">
        <h3>{{anuncio.title}}</h3>
        <div v-if="newPrice" class="discount-wrapper">
            -{{anuncio.discount}}%
        </div>
        </div>
        <p v-bind:class="priceClass">R$ {{anuncio.price}}</p>
        <p v-if="newPrice" class="new-price">R$ {{newPrice}}</p>
        <p class="description">{{anuncio.description}}</p>
        <button class="btn-blue-large">
            COMPRAR 
            <font-awesome-icon class="menu-icon" icon="shopping-cart"/>
        </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Description',
    props: ["idAnuncio"],
    data(){
        return{
            anuncio: {},
            newPrice: false,
            priceClass: 'new-price'
        }
    },
    methods: {
        ...mapActions(['fetchProducts']),
        filterProducts(){
            const filtered = this.allProducts.filter(product => product.id == this.idAnuncio)
            this.anuncio = filtered[0];
            this.calcNewPrice();
        },
        calcNewPrice(){
            if(this.anuncio.discount){
                this.newPrice = this.anuncio.price - this.anuncio.price * (this.anuncio.discount/100);
                this.newPrice = this.newPrice.toFixed(2);
                this.priceClass = 'old-price';
            }
        }
    },
    computed: mapGetters(["allProducts"]),
    created(){
        this.fetchProducts().then(() => this.filterProducts());
    }
}
</script>

<style>
#description{
    width: 40%;
    padding-left: 30px;
}
.title-discount-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.title-discount-wrapper h3{
    margin: 0px;
}
.discount-wrapper{
    background: rgb(204, 204, 204);
    padding: 5px;
    border-radius: 5px;
}

.old-price{
    font-size: 14px;
    text-decoration: line-through;
    margin: 5px 0px;        
    color: #408dcc;
}
.new-price{
    margin: 5px 0px;  
    font-size: 20px;
    margin: 5px 0px;
}
.description{
    color: #616161;
    font-size: 14px;
    text-align: justify;
    padding: 10px 0px;
}
</style>
