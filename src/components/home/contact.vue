<template>
    <div id="contact">
        <div class="contact-wrapper">
            <h3>quer entra em contato com a equipe KATS?</h3>
            <a href="">fale conosco</a>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Contact'
}
</script>

<style scoped>
    #contact{
        background-image: url('../../assets/cat banner.png');
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 12px;
        height: 300px;
        margin-bottom: 120px;
        display: flex;
        align-items: center;
        padding: 30px;
        box-sizing: border-box;
    }
    #contact a{
        font-size: 1em;
        color: #408dcc;
        font-weight: 600;
        text-decoration: underline wavy;
        cursor: pointer;
    }
    #contact a:hover{
        top: -1px;
        position: relative;
    }
    .contact-wrapper{
        height: min-content;
    }
    h3{
        font-size: 2vw;
        color: #fabe4f;
        margin-bottom: 10px;
    }
</style>