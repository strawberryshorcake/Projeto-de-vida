const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length; i++){
    botoes[i].onclick = function(){

       for(let j=0;j<botoes.length;j++){
           botoes[j].classList.remote("ativo");
           textos[j].classList.remote("ativo");
       }

       botoes[i].classList.add("ativo");
       textos[i].classList.add("ativo");
    }
}  


const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2026-10-0500:00:00");
let tempoAtual = new Date();

contadores[0].textContent = calculaTempo(tempoObjetivo);

function calculaTempo(tempoObjetivo){
}