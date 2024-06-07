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


 /* 
 Animação é executada quando o 
 botão do sellflux é clicado.  
 O formulário do Sellflux é mostrado. 
Quando o botão fechar é clicado, o formulário é 
oculto.
 */


var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};
 

$(".menu > ul > li").click(function (e) {
  // Remove the 'active' class from other menu items
  $(this).siblings().removeClass("active");
  // Toggle the 'active' class on the clicked menu item
  $(this).toggleClass("active");
  // Toggle the visibility of the submenu
  $(this).find("ul").slideToggle();
  // Close other submenus if they are open
  $(this).siblings().find("ul").slideUp();
  // Remove the 'active' class from submenu items
  $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function () {
  // Toggle the 'active' class on the sidebar
  $(".sidebar").toggleClass("active");
});
