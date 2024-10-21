<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email">
    
    <label>Senha:</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error">{{ passwordError }}</div>
    
    <label>Função atual:</label>
    <select v-model="role">
        <option value="desenvolvedor">Desenvolvedor Web</option>
        <option value="designer">Designer Web</option>
    </select>

    <label for="">Habilidades: (alt + virgula para adicionar)</label>
    <input type="text" v-model="tempSkill" @keyup.ctrl="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill">
        <span  @click="removeSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label>Aceitar termos e condições</label>
    </div>

    <div class="submit">
        <button>Criar conta</button>
    </div>
  </form>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: '',
            role: '',
            terms: false,
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(e){
            if(e.key === ',' && this.tempSkill){
                if(!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        removeSkill(skill){
            this.skills = this.skills.filter((item)=> {
                return skill !== item
            })
        },
        handleSubmit(){
            // validar senha
            this.passwordError = this.password.length > 5 ? '' : 'Sua senha precisa ter pelo menos 6 caracteres.'
        
            if(!this.passwordError){
                console.log('email: ', this.email)
                console.log('password: ', this.password)
                console.log('role: ', this.role)
                console.log('skills: ', this.skills)
                console.log('terms accepted: ', this.terms)

                this.clearInputs()
            }
        },
        clearInputs(){
            this.email = '',
            this.password = '',
            this.role = '',
            this.terms = false,
            this.tempSkill = '',
            this.skills = [],
            this.passwordError = ''
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
    .pill {
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 6px 12px;
        background: #eee;
        border-radius: 20px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
        color: #777;
        cursor: pointer;
    }
    .pill:hover{
        background: rgb(198, 44, 44);
        color: white;
    }
    button {
        cursor: pointer;
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
    }
    .submit {
        text-align: center;
    }
    .error {
        color: #ff0062;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>