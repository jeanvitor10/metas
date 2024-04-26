const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
    }
}
metas.html

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Metas 2024</title>
    <link rel="stylesheet" href="style-metas.css">
</head>

<body>
    <section class="conteudo-principal">
        <h2 class="titulo-principal">Minhas metas para este ano<span>_</span></h2>
        <div class="botoes">
            <button class="botao ativo">Emagrecer</button>
            <button class="botao ">Passar de Ano</button>
            <button class="botao ">Passar no vestibular</button>
            <button class="botao ">Conseguir um emprego</button>
        </div>
    </section>

 
    <script src="main.js"></script>
</body>

</html>
