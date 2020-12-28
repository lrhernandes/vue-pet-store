<template>
    <div id="cardproduto">
        <div class="imagecardproduto"><div class="descount-tag">-{{product.discount}}%</div></div>
        <div class="contentcardproduto">
            <div class="title-wrapper">
                <p>{{product.title}}</p>
                <a title="Adicionar ao carrinho" href="">  <font-awesome-icon icon="cart-plus" /></a>
            </div>
            <div>
                <p class="old-price">RS {{product.price}}</p>
                <p class="new-price">R$ {{newPrice}} </p>
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
        newPrice: null
    }
  },
  methods: {
    calcNewPrice(){
        this.newPrice = this.product.price - this.product.price * (this.product.discount/100);
        this.newPrice = this.newPrice.toFixed(2);
    }
  },
created(){
    this.calcNewPrice();
}
}
</script>

<style scoped>
    #cardproduto{
        height: 100%;
    }
    img{
        height: 15px;
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
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }
    .title-wrapper p{
        margin: 0px;
    }
    .title-wrapper a svg{
        color: #408dcc;
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
    .contentcardproduto{
        padding: 15px;
        background-color: rgb(243, 243, 243);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .old-price{
        font-size: 12px;
        text-decoration: line-through;
        margin: 0px;        
        color: #408dcc;
    }
    .new-price{
        font-size: 16px;
        margin: 0px;
    }
</style>