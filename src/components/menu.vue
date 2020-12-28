<template>
    <div id="menu">
        <p>Kats</p>
        <div class="categorygroup">
            <a class="categorybtn">cachorros</a>
            <a class="categorybtn">gatos</a>
            <a class="categorybtn">roedores</a>
        </div>
        <div class="categorygroup">
            <div> <font-awesome-icon class="menu-icon" icon="search" /> </div>
            <div> <font-awesome-icon class="menu-icon" icon="shopping-cart" /> </div>
            <div> <font-awesome-icon class="menu-icon" icon="sign-in-alt" /> </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Menu'
}
</script>

<style scoped>
    #menu{
        display: flex;
        padding: 15px 0px;
        margin-bottom: 10px;
        justify-content: space-between;
    }
    p{
        font-size: 24px;
        margin: 10px 0px;
        text-transform: uppercase;
    }
    .categorygroup{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .categorygroup a:nth-of-type(2){
        margin: 0vw 6vw;
    }
    .categorybtn{
        background: none;
        border: 0px;
        font-size: 16px;
        font-family: 'Roboto Slab', serif;
        color: #525252;
    }
    .categorybtn:hover{
        cursor: pointer;
    }
    .menu-icon{
        height: 15px;
        vertical-align: middle;
        cursor: pointer;
    }
    .categorygroup div:nth-of-type(2){
        margin: 0vw 4vh;
    }
    .menu-icon:hover, a:hover{
        top: -1px;
        position: relative;
    }
</style>