var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })
})

// function nome(argumento){      <-------------esse é o formato de uma função
//     conteudo da função
// }