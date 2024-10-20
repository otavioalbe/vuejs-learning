<template>
  <div class="block" v-if="showBlock">
    click me
  </div>
</template>

<script>
export default {
    data(){
        return {
          showBlock: false  
        }
    },
    props: ['delay'],
    mounted(){
        console.log('componente montado')
        setTimeout(() => {
            this.showBlock = true
            console.log(this.delay)
        }, this.delay)
    },
    updated(){
        console.log('componente atualizado')
    },
    unmounted(){
        console.log('componente desmontado')
    }
}
</script>

<style>
    .block{
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>