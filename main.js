const botoes = document.querySelectorAll(".botoao");

for(let i=0;i <botoes.length; i++){
    botoes[i].onclick = function(){

       for(let j=0;j<botoes.length;j++){
           botoes[j].classList.remote("ativo");
       }

       botoes[i].classList.add("ativo");


    
    
    }
    console.log();
}