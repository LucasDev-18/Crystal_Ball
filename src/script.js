var elementoResposta = document.querySelector("#resposta")
var inputPergunta = document.querySelector("#pergunta")


var respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Tudo indica que sim!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Você está sonhando demais",
  "Não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Talvez num futuro distante",
  "Sinais apontam que sim.",
]



  //clicar em fazer pergunta
function Pergunta() {

  if (inputPergunta.value == "") {
    alert("Digite sua Pergunta")
    return
  };

  // inserir a pergunta junto com a resposta
  var pergunta = '<div class="font-bold">' + inputPergunta.value + '</div>'
  
  //gerar número aleatório
  var totalRespostas = respostas.length
  var numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  //sumir depois de um tempo
  setTimeout(function() {
    elementoResposta.style.opacity = 0
  }, 3000)
}