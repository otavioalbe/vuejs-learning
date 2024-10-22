<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        {{ job.title }}
    </div>
</template>

<script>
export default {
    data(){
        return{
            jobs: [
                { title: 'UX Designer', id: 1, details: 'lorem'},
                { title: 'Web Developer', id: 2, details: 'lorem'},
                { title: 'Vue Developer', id: 3, details: 'lorem'}
            ]
        }
    }
}
</script>

<style>

</style>