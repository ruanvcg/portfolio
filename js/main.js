
const menu = document.querySelector("#menu");
const btnMobile = document.querySelector(".btn-menu");
const descript = document.querySelector('.descript');
var linksMenu = document.querySelectorAll('#menu .menu-itens li a');

// MENU RESPONSIVE ======================================================================

function toggleMenu() {
  menu.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);



// EFECT TYPING ==========================================================================

function typeWrite(element){
  const textoArray = element.innerHTML.split('');
  element.innerHTML = '';
  textoArray.forEach((letra, i) =>{
    setTimeout(function() {
      element.innerHTML += letra;
    }, 25 * i)
  })
}

typeWrite(descript)


// SCROLL MENU EFECT =============================================================================


document.addEventListener('DOMContentLoaded', function() {

  // Adiciona um evento de clique a cada link do menu
  linksMenu.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Impede o comportamento padrão do link

      var targetId = this.getAttribute('href'); // Obtém o ID do alvo do link

      // Calcula a posição do alvo e o deslocamento necessário para ajustar a posição
      var targetOffsetTop = document.querySelector(targetId).offsetTop;
      var navHeight = document.querySelector('nav').offsetHeight;
      var offset = navHeight;

      // Ajusta a posição de scroll
      window.scrollTo({
        top: targetOffsetTop - offset,
        behavior: 'smooth'
      });
      menu.classList.remove("active");
    });
  });
});

function redirecionar(url) {
  window.open(url, '_blank');
}