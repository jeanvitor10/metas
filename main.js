const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo")

for(let i=0;i <botoes.length;++){  
  botoes[i].inclick = function(){
    for(let j=0;<botoes.length;j++){
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove('ativo')
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  }
}
const contador = document.querySelectorAll(".contador");
const tempoObjetivo1 = new date("2024-12-21t00:00:00");
let tempoAtual = new date();
contadores[0].textoContent = tempoAtual;  

let tempofinal = tempoOjetivol - tempoAtual;
let segundo = tempofinal1/1000;
let minutos = segundo/60;
let horas = minutos/60;
let dias = horas/24;

contadores[0].textoContent =dia + "dias" + horas + "horas" +
minutos + "minutoas" +  segudos + "segudos";