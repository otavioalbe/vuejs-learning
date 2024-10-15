const app = Vue.createApp({
    // data, functions
    // template: '<h2>Isso é um template</h2>'
    data() {
        return {
            titulo: 'The Final Empire',
            autor: 'Brandon Sanderson',
            idade: 45
        }
    }
});

app.mount('#app');