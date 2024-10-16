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
                    img: 'assets/1.jpg',
                    isFavorito: true
                },
                {
                    titulo: 'The Way of Kings',
                    autor: 'Brandon Sanderson',
                    img: 'assets/2.jpg',
                    isFavorito: false
                },
                {
                    titulo: 'The Final Empire',
                    autor: 'Brandon Sanderson',
                    img: 'assets/3.jpg',
                    isFavorito: true
                }
            ]
        }
    },
    methods: {
        toggleMostrarLivros() {
            this.mostrarLivros = !this.mostrarLivros;
        },
        toggleFav(livro) {
            livro.isFavorito = !livro.isFavorito
        }
    }
});

app.mount('#app');