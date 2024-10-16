<template>
  <h1>{{ titulo }}</h1>
  <Modal/>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return{
      titulo: 'Meu primeiro App Vue'
    }
  },
  methods: {
    handleClique(){
      console.log(this.$refs.nome);
      this.$refs.nome.classList.add('ativo');
      this.$refs.nome.focus();
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
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
