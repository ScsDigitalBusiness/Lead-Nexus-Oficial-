/* 
ELEMENTO : BARRA DE PESQUISA 

Criação de objeto que contém os id´s dos elementos HTML. 
Foi referenciado  dentro do script cada elemento que constitui a 
barra de navegação 

Criador: THIAGO DUARTE 

Data da última modificação : 23/01/2024
*/
const search = {
  button: () => document.getElementById("search-button"),
  bar: () => document.getElementById("search-bar"),
};
$(search.button()).click(() => {
  $(search.bar()).toggle();
});

/*
Animação executada quando o 
botão de nova lead for clicado. 
Quando o botão de fechar for clicado novamente
a área de cadastro ficará oculta. 
*/

$("#new-Lead").click(() => {
  $("#new-Lead").hide();
  $(".register").fadeIn(200);
  $(".content").addClass("desfoque");
  $(".close").click(function () {
    $("#new-Lead").show();
    $(".register").fadeOut(200);
    $(".content").removeClass("desfoque");
  });
});
 /* 
 Animação é executada quando o 
 botão do sellflux é clicado.  
 O formulário do Sellflux é mostrado. 
Quando o botão fechar é clicado, o formulário é 
oculto.
 */
$(".sell-flux").click(() => {
  $(".sellflux-send").show();
  $(".sellflux-send").fadeIn(200);
  $(".close3").click(() => {
    $(".sellflux-send").hide();
    $(".sellflux-send").fadeOut(200);
  });
});
 
setTimeout(() => { 
  document.getElementById("spiner-area").remove(); 
}, 1000);