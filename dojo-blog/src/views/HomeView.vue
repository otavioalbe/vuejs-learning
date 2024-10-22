<template>
  <div class="home">
    home
    {{ name }} {{ age }}
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  setup(){
    console.log('setup')

    const handleClick = () => {
      console.log('you clicked me')
    }

    let name = 'mario'
    let age = 30
    return { name, age, handleClick }
  }
}
</script>
