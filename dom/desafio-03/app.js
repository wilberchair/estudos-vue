new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch: {
        resultado(novo, antigo) {
            console.log(novo, antigo)
            setTimeout(() => {
            this.valor = 0
            }, 5000)
        }
    },
    computed: {
        resultado() {
            return this.valor !== 37 
            ? 'Valor Diferente'
            : 'Valor Igual'
        }
    },
    methods: {
        
    }
});