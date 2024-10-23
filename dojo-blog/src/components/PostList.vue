<template>
  <div class="postList">
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props){
        onMounted(() => console.log('component mounted'))
        onUnmounted(() => console.log('console unmounted'))
        onUpdated(() => console.log('console updated'))
    }
}
</script>

<style>

</style>