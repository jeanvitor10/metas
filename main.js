const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;++)}
  botoes[i].inclick = function(){
    for(let j=0;<botoes.length;j++){
        botoes[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
  }
}