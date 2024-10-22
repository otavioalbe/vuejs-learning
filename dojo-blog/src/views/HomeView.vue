<template>
  <div class="home">
    home
    <p ref="p">{{ name }} {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',
  setup(){
    console.log('setup')

    const p = ref(null)

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'hello world!'
    }

    let name = 'mario'
    let age = 30
    return { name, age, handleClick, p}
  }
}
</script>
