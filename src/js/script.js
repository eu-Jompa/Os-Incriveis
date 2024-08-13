const buttons = document.querySelectorAll("button");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

buttons.forEach((button,indice)=>{
    button.addEventListener("click",()=>{
        offButtonAtivo();
        onButtonAtivo(button);


        offImagemAtivo()
        onImagemAtivo(indice);


        offInformacoes();

        onInformacoes(indice);
        
    })
})

function offButtonAtivo(){
    const buttonAtivo = document.querySelector("button.ativo");
    if (buttonAtivo) {
        buttonAtivo.classList.remove("ativo");
    }
    

}
function onButtonAtivo(button){
    button.classList.add("ativo");
}

// imagem
function offImagemAtivo(){
    const imagemAtivo = document.querySelector(".imagem.selecionado")
    if (imagemAtivo) {
        
        imagemAtivo.classList.remove("selecionado");
    }
}
function onImagemAtivo(indice){
    imagens[indice].classList.add("selecionado")

}

// conteudo

function offInformacoes() {
    const conteudoOff = document.querySelector(".informacoes.ativa");
    if (conteudoOff) {
        conteudoOff.classList.remove("ativa");
    }
}
function onInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

window.addEventListener('click',()=>{
    var audio = document.getElementById('music');
    audio.volume = 0.1;
    audio.play();
}, {once:true});