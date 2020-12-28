<template>
    <div id="parceiros">
        <img class="parceiros-img" src="../../assets/hercosul.png"/>
        <img class="parceiros-img" src="../../assets/pedigree.png"/>
        <img class="parceiros-img" src="../../assets/birbo.png"/>
        <img class="parceiros-img" src="../../assets/elanco.png"/>
    </div>
</template>

<script>

export default {
  name: 'Parceiros'
}
</script>

<style scoped>
    #parceiros{
        margin-top: 120px;
        margin-bottom: 120px;
        display: flex;
        justify-content: space-between;
    }
    .parceiros-img{
        box-sizing: border-box;
        max-width: 20%;
    }
</style>