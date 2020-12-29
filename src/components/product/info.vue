<template>
  <div id="info">
    <div class="info-table">
        <h4>Informações do produto</h4>
        <table>
            <tr>
                <td>Marca</td>
                <td>{{anuncio.brand}}</td>
            </tr>
            <tr class="dif">
                <td>Categoria</td>
                <td>{{categoria}}</td>
            </tr>
            <tr>
                <td>Peso</td>
                <td>{{anuncio.weight}}</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Info',
    props: ["idAnuncio"],
    data(){
        return{
            anuncio: {},
            categoria: ''
        }
    },
    methods: {
        ...mapActions(['fetchProducts']),
        filterProducts(){
            const filtered = this.allProducts.filter(product => product.id == this.idAnuncio)
            this.anuncio = filtered[0];
            this.defineCategory();
        },
        defineCategory(){
            if(this.anuncio.category === 'dog'){
                this.categoria = 'Cachorros';
            } else if(this.anuncio.category === 'cat'){
                this.categoria = 'Felinos';
            }else{
                this.categoria = 'Roedores';
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
#info{
    margin: 60px 0px;
}
.info-table h4{
    margin: 10px 0px;
    color: #408dcc;
}

.info-table table{
    width: 100%;
    border-collapse: collapse;
}

.info-table table td{
    background: rgb(221, 221, 221);
    border: 2px solid white;
    padding: 5px;
}
.info-table table .dif td{
    background: rgb(240, 240, 240);
}


</style>
