new Vue({
  el: '#desafio',
  data: {
    nome: 'Wilber',
    idade: 34,
    imagem: 'https://botanarifa.com.br/img/72fa1dec8836248614df80059dee1a21.jpg'
  },
  methods: {
    multiplicaIdade() {
      return this.idade * 3
    },
    random() {
      return Math.round(Math.random())
    },
    alterarNome(event) {
      this.titulo = event.target.value
    }
  }
})