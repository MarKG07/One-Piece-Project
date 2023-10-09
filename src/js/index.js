const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, indice) => { //percorre todos os botoes
    botao.addEventListener('click', () => { //coloca escuta em cada botao

        desselecionarBotao()
        desselecionarPersonagem()

        botao.classList.add("selecionado") //adiciona classe no botao clicado
        personagens[indice].classList.add("selecionado")//usa o indice do foreach do botao para escolher qual div precisa mudar
    })
})

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado") //selecionar o botao q tem essas classes
    botaoSelecionado.classList.remove("selecionado")//remove o botao que tiver essa classe
}

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado")
    personagemSelecionado.classList.remove("selecionado")
}
