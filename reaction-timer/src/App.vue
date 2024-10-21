<template>
  <h1>Teste de reação</h1>
  <button @click="start" :disabled="isPlaying">Jogar</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <p v-if="showResults">Tempo de reação: {{ score }}ms</p>
</template>

<script>
import Block from './components/Block.vue'

export default {
  name: 'App',
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  components: { Block },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 4000
      this.isPlaying = true
      this.showResults = false
    },
    endGame(reactionTime){
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
