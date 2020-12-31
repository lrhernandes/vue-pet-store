<template>
    <div id="cardproduto">
        <div class="imagecardproduto"><div  v-if="newPrice" class="descount-tag">-{{product.discount}}%</div></div>
        <div class="contentcardproduto">
            <div class="title-wrapper">
                <p>{{product.title}}</p>
                <a title="Adicionar ao carrinho" href="">  <font-awesome-icon icon="cart-plus" /></a>
            </div>
            <div>
                <p v-bind:class="priceClass">R$ {{product.price}}</p>
                <p v-if="newPrice" class="new-price">R$ {{newPrice}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardProduto',
  props: ["product"],
  data(){
    return{
        newPrice: false,
        priceClass: 'new-price'
    }
  },
  methods: {
    calcNewPrice(){
        if(this.product.discount){
            this.newPrice = this.product.price - this.product.price * (this.product.discount/100);
            this.newPrice = this.newPrice.toFixed(2);
            this.priceClass = 'old-price';
        }else{
            this.priceClass = 'singular-price';
        }
    }
  },
    created(){
        this.calcNewPrice();
    }
}
</script>

<style scoped>
    .singular-price{
        font-size: 24px;
        color: #525252;
        margin-top: 0px;
    }
    #cardproduto{
        height: 100%;
        box-sizing: border-box;
        height: 330px;
        position: relative;
    }
    .contentcardproduto{
        padding: 15px;
        background-color: rgb(243, 243, 243);
        display: flex;
        height: 20%;
        flex-direction: column;
        justify-content: space-between;
    }
    .descount-tag{
        background-color: rgba(219, 219, 219, 0.74);
        color: #525252;
        width: max-content;
        padding: 5px;
        font-size: 14px;
        float: right;
        border-radius: 6px;
    }
    .title-wrapper{
        display: flex;
        color: #525252;
        align-items: center;
        flex-direction: row;
        padding-bottom: 5px;
        justify-content: space-between;
    }
    .title-wrapper p{    
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0px;
        font-size: 15px;
    }
    .title-wrapper a svg{
        color: #408dcc;
        padding-left: 2px;
    }
    .title-wrapper a:hover{
        top: -1px;
        position: relative;
    }
    .imagecardproduto{
        background-color: gray;
        height: 70%;
        width: 100%;
        border-radius: 12px 12px 0px 0px;
        box-sizing: border-box;
        padding: 15px;
    }
    #products .contentcardproduto{
        border-radius: 0px 0px 12px 12px;
    }
    .old-price{
        font-size: 12px;
        text-decoration: line-through;
        margin: 0px;     
        padding-bottom: 3px;   
        color: #408dcc;
    }
    .new-price{
        font-size: 16px;
        margin: 0px;
        color: #525252;
    }
</style>