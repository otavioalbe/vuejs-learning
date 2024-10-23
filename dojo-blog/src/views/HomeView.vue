<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup(){
    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet ligula non nisl sagittis vehicula ac vitae sapien. Pellentesque purus ante, interdum sed tincidunt sit amet, convallis non eros. Vestibulum lacinia erat eu est euismod dapibus. In eget ligula sit amet est consequat aliquet. Nunc dapibus pulvinar turpis, eu laoreet tellus laoreet non. Aliquam a elit nec ipsum euismod suscipit. Sed finibus accumsan tortor vel maximus. Mauris aliquet et eros vitae faucibus. Mauris scelerisque cursus quam eu elementum. Sed venenatis interdum faucibus. Nullam sodales nunc in libero pellentesque, sed condimentum mauris mollis. Aliquam tincidunt, metus ut elementum scelerisque, est magna varius mauris, ac feugiat tellus odio ut tellus.', id: 1 },
      { title: 'top 5 CSS tips', body: 'Lorem ipsum', id: 2 },
      ])
      return { posts }
  }
}
</script>
