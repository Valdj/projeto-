//carrossel//
$('.carrossel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:"#botao-esquerda",
    nextArrow:"#botao-direita"
});



//abrir login //
function abrirLogin(){
    const modal = document.getElementById("modal");
    if(modal) {
        modal.classList.add("mostrarmodal");
        modal.addEventListener("click", (event) =>{
            if(event.target.id == "modal"  || event.target.id == "fecharbotao") {
                modal.classList.remove("mostrarmodal");
            }
        });
    }
}
// parte da barra fixa //
window.onscroll = function(){
   barrafixa();
}
function barrafixa() {
    const barrafixa = document.getElementById("barrafixa");
    if (document.documentElement.scrollTop > 50){
        barrafixa.classList.add("barrafixa");
    } else {
        barrafixa.classList.remove("barrafixa");
    }
}
// avaliação //
function abriravaliacao(){
    const pesquisa = document.getElementById("avaliacao");
    if(pesquisa) {
        pesquisa.classList.add("mostraravalie");
        pesquisa.addEventListener("click", (event) =>{
            if(event.target.id == "avaliacao"  || event.target.id == "fecharavalie") {
                pesquisa.classList.remove("mostraravalie");
            }
        });
    }
}

//botao avalie//