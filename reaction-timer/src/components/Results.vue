<template>
    <p>Tempo de reação: {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data(){
        return{
            rank: null
        }
    },
    mounted() {
        if(this.score < 250){
            this.rank = 'Dedos de ninja'
        } else if(this.score < 400 ){
            this.rank = 'Reflexos apurados'
        } else{
            this.rank = 'Lerdo...'
        }
    }
}
</script>

<style>
    .rank{
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>