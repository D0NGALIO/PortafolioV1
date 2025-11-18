document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});
// MODAL PROJECT 1
const modal1 = document.getElementById("modal-project1");
const openBtn1 = document.querySelector(".open-project1");
const closeBtn1 = modal1.querySelector(".close");

// Abrir modal
openBtn1.addEventListener("click", () => {
  modal1.style.display = "flex"; 
});

// Cerrar modal con X
closeBtn1.addEventListener("click", () => {
  modal1.style.display = "none";
});

// Cerrar al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal1) {
    modal1.style.display = "none";
  }
});
