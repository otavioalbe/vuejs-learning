<template>
  <h1>{{ titulo }}</h1>
  <p>Bem-vindo</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="">Inscreva-se</a>
        <a href="">Mais informações</a>
      </template>
      <h1>Sorteio Ninja</h1>
      <p>Tente a sorte por metade do preço!</p>
    </Modal>
  </teleport>

  <teleport to=".modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h2>Olá</h2>
    </Modal>
  </teleport>
  <button @click.shift="toggleModal">open modal (shift)</button>
  <br><br>
  <button @click="toggleModalTwo"> open modal 2</button>
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
      titulo: 'Meu primeiro App Vue',
      header: 'Inscreva-se para o sorteio',
      text: 'Tente a sorte!',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClique(){
      console.log(this.$refs.nome);
      this.$refs.nome.classList.add('ativo');
      this.$refs.nome.focus();
    },
    toggleModal(){
      this.showModal =!this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
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
