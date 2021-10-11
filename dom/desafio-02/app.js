new Vue({
    el: '#desafio',
    data: {
        valor: 'Digite aqui...'
    },
    methods: {
        alerta() {
            return alert('Alerta')
        },
        escutarEvento(event) {
            return this.valor = event.target.value;
        }
    }
})