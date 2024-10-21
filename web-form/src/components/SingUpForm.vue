<template>
  <form>
    <label>Email:</label>
    <input type="email" required v-model="email">
    
    <label>Senha:</label>
    <input type="password" required v-model="password">
    
    <label>Função atual:</label>
    <select v-model="role">
        <option value="desenvolvedor">Desenvolvedor Web</option>
        <option value="designer">Designer Web</option>
    </select>

    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label>Aceitar termos e condições</label>
    </div>

    <div>
        <input type="checkbox" value="shaun" v-model="names">
        <label>Shaun</label>
    </div>
    <div>
        <input type="checkbox" value="yoshi" v-model="names">
        <label>Yoshi</label>
    </div>
    <div>
        <input type="checkbox" value="mario" v-model="names">
        <label>Mario</label>
    </div>
  </form>
  
  <p>{{ email }}</p>
  <p>{{ password }}</p>
  <p>{{ role }}</p>
  <p>{{ terms }}</p>
  <p>{{ names }}</p>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: '',
            role: '',
            terms: false,
            names: []
        }
    }
}
</script>

<style>
    form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
</style>