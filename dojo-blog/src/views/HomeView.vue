<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
        {{ name }}
    </div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  setup(){
    const names = ref(['mario','vans','yoshi','fabris','claat','bomba',])
    const search = ref('')

    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })

    const stopWatchEffect = watchEffect(() => {
      console.log('watchEffect function run', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) =>
        name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopWatchEffect()
    }

    return { names, search, matchingNames, handleClick }
  }
}
</script>
