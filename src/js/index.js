// Pega todos os botões e personagens do HTML
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

/**
 * Remove a seleção atual do botão previamente selecionado
 */
function removerSelecaoDoBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
    }
}

/**
 * Remove a seleção atual do personagem previamente selecionado
 */
function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove("selecionado");
    }
}

/**
 * Adiciona a classe "selecionado" no botão clicado
 * @param {Element} botao - Botão clicado
 */
function selecionarBotao(botao) {
    botao.classList.add("selecionado");
}

/**
 * Mostra o personagem correspondente ao botão clicado
 * @param {number} indice - Índice do personagem a ser exibido
 */
function mostrarPersonagem(indice) {
    personagens[indice].classList.add("selecionado");
}

// Adiciona o evento de clique para cada botão
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Quando clicar em um botão:
        removerSelecaoDoBotao();
        selecionarBotao(botao);

        removerSelecaoDoPersonagem();
        mostrarPersonagem(indice);
    });
});