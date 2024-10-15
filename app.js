const app = Vue.createApp({
    // data, functions
    // template: '<h2>Isso é um template</h2>'
    data() {
        return {
            mostrarLivros: true,
            titulo: 'The Final Empire',
            autor: 'Brandon Sanderson',
            idade: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleMostrarLivros() {
            this.mostrarLivros = !this.mostrarLivros;
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});

app.mount('#app');