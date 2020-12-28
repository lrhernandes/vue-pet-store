<template>
    <div id="banner">
        <div class="change-counter-button">
            <button v-on:click="decrementCounter">⬅</button>
        </div>
        <div class="image-wrapper">
            <div class="image-content" v-bind:class="imageClass"></div>
        </div>
        <div class="change-counter-button">
            <button v-on:click="incrementCounter">➡</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Banner',
  data(){
    return{
        count: 0,
        imageClass: 'image-class-0'
    }
  },
  methods:{
    incrementCounter(){
        if(this.count==3){
            this.count = 0;
        }else{
            this.count += 1;
        }
        this.imageClass = 'image-class-' + this.count;
    },
    decrementCounter(){
        if(this.count==0){
            this.count = 3;
        }else{
            this.count -= 1;
        }
        this.imageClass = 'image-class-' + this.count;
    }
  }
}
</script>

<style scoped>
    #banner{
        display: flex;
        flex-direction: row;
        justify-content: space-between
    }
    .image-wrapper{
        width: 100%;
        height: 400px;
        padding: 0px 8px;
    }
    .change-counter-button{
        display: flex;
        align-items: center;
    }
    .image-content{
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center
    }
    .image-class-0{
        background-image: url('../../assets/back0.jpg');
    }
    .image-class-1{
        background-image: url('../../assets/back1.jpg');
    }
    .image-class-2{
        background-image: url('../../assets/back2.jpg');
    }
    .image-class-3{
        background-image: url('../../assets/back3.jpg');
    }
</style>