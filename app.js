const app = Vue.createApp({
    // data, functions
    // template: '<h2>Isso é um template</h2>'
    data() {
        return {
            mostrarLivros: true,
            livros: [
                {
                    titulo: 'Name of the Wind',
                    autor: 'Patrick Rothfuss'
                },
                {
                    titulo: 'The Way of Kings',
                    autor: 'Brandon Sanderson'
                },
                {
                    titulo: 'The Final Empire',
                    autor: 'Brandon Sanderson'
                }
            ]
        }
    },
    methods: {
        toggleMostrarLivros() {
            this.mostrarLivros = !this.mostrarLivros;
        }
    }
});

app.mount('#app');