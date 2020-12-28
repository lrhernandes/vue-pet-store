<template>
    <div id="menu">
        <p>Kats</p>
        <div class="categorygroup">
            <a class="categorybtn">cachorros</a>
            <a class="categorybtn">gatos</a>
            <a class="categorybtn">roedores</a>
        </div>
        <div class="search-input"> 
            <div class="input-container">
                <input type="text" placeholder="pesquisar produtos"/> 
                <font-awesome-icon class="menu-icon" icon="search"/>
            </div> 
        </div>
        <div class="categorygroup">
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
    .categorygroup, .search-input{
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
    }
    .categorygroup a:nth-of-type(2){
        margin: 0vw 6vw;
    }
    .categorybtn{
        background: none;
        box-sizing: border-box;
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
        margin-left: 4vh;
    }
    .categorygroup .menu-icon:hover, a:hover{
        top: -1px;
        position: relative;
    }
    .input-container{
        border: 0px;
        margin-top: 5px;
        width: max-content;
        border-bottom: 2px solid #408dcc;
        height: 25px;
    }
    .search-input input, .search-input input::placeholder{
        border: 0px;
        color: #408dcc;
        width: 140px;
        font-size: 15px;
        font-family: 'Roboto Slab', serif;
    }
    .search-input input:focus{
        outline: none;
    }
    .search-input:focus::placeholder{
        font-size: 13px;
    }
    .search-input .menu-icon{
        color: #408dcc;
        height: 13px;
    }
</style>