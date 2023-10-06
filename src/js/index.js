const botoes = document.querySelectorAll('.botao')

botoes.forEach(botao => { //percorre todos os botoes
    botao.addEventListener('click', () => { //coloca escuta em cada botao

        const botaoSelecionado = document.querySelector(".botao.selecionado")//selecionar o botao q tem essas classes
        botaoSelecionado.classList.remove("selecionado")//remove o botao que tiver essa classe

        botao.classList.add("selecionado") //adiciona classe no botao clicado

        const personagens = document.querySelectorAll('.personagem')
        personagens.forEach(personagem => {
            console.log(personagem)
        })
    })
})

