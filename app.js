const app = Vue.createApp({
    // data, functions
    // template: '<h2>Isso é um template</h2>'
    data() {
        return {
            mostrarLivros: true,
            titulo: 'The Final Empire',
            autor: 'Brandon Sanderson',
            idade: 45
        }
    },
    methods: {
        toggleMostrarLivros() {
            this.mostrarLivros = !this.mostrarLivros
        }
    }
});

app.mount('#app');