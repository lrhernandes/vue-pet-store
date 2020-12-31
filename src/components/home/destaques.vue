<template>
    <div id="destaques">
        <h4>Itens em promoção para o seu pet ;)</h4>
        <div class="carousel-viewport">
            <ul>
                <li v-for="product in allDiscountProducts" :key="product.id">
                    <router-link :to="{name: 'Product', params: {id: product.id}}">
                        <CardProduto v-bind:product="product"/>
                    </router-link>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
import CardProduto from './cardProduto';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Destaques',
    methods: {
        ...mapActions(['fetchDiscountProducts']),
    },
    computed: mapGetters(["allDiscountProducts"]),
    components: {
        CardProduto
    },
    created(){
        this.fetchDiscountProducts();
    }
}
</script>

<style scoped>
    #destaques{
        padding-bottom: 120px;
    }
    #destaques h4{
        color: #408dcc;
    }
    #destaques a{
        text-decoration: none;
    }
    ul{
        margin: 0px;
        padding: 0px;
        display: flex;
        overflow-y: hidden;
        overflow-x: scroll;
    }
    ul::-webkit-scrollbar {
        height: 0.4em;
    }
    ul::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 8px;
    }
    ul::-webkit-scrollbar-thumb {
        background-color: #d1d1d1;
        border-radius: 8px;
    }
    li{
        list-style: none;
        min-width: 300px;
        height: 350px;
        margin-right: 70px;
        border-radius: 12px 12px 0px 0px;
    }
    li:hover{
        cursor: pointer;
        filter: brightness(95%);
    }
</style>