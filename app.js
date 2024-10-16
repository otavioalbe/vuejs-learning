const app = Vue.createApp({
    // data, functions
    // template: '<h2>Isso é um template</h2>'
    data() {
        return {
            url: 'https://google.com.br',
            mostrarLivros: true,
            livros: [
                {
                    titulo: 'Name of the Wind',
                    autor: 'Patrick Rothfuss',
                    img: 'assets/1.jpg'
                },
                {
                    titulo: 'The Way of Kings',
                    autor: 'Brandon Sanderson',
                    img: 'assets/2.jpg'
                },
                {
                    titulo: 'The Final Empire',
                    autor: 'Brandon Sanderson',
                    img: 'assets/3.jpg'
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