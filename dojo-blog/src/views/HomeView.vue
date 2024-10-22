<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ personOne.name }} {{ personOne.age }}</p>
    <button @click="updatePersonAge">update person1</button>
    <h2>Reactive</h2>
    <p>{{ personTwo.name }} {{ personTwo.age }} {{ nameTwo }}</p>
    <button @click="updatePersonAgeTwo">update person2</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',
  setup(){
    const personOne = ref({ name: 'mario', age: 30 })
    const personTwo = reactive({ name: 'luigi', age: 35 })

    const nameOne = ref('mario')
    const nameTwo = reactive('luigi')

    const updatePersonAge = () => {
      personOne.value.age = 40
    }
    const updatePersonAgeTwo = () => {
      personTwo.age = 50
      // nameTwo = 'carlos' -> não funciona
    }

    return { personOne, personTwo, updatePersonAge, updatePersonAgeTwo, nameTwo }
  }
}
</script>
