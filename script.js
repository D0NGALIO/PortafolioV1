document.addEventListener("DOMContentLoaded", () => {
  // ========= FUNCIONES GENERALES PARA MODALES =========
  function openModal(modal) {
    if (!modal) return;
    modal.style.display = "flex";
    requestAnimationFrame(() => {
      modal.classList.add("show");
    });
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 250); // que coincida con la transición del CSS
  }

  /**
   * Conecta un modal con sus botones:
   * @param {string} modalId - id del modal (sin #)
   * @param {string} openBtnClass - clase del botón que abre (sin .)
   * @param {string} closeInnerClass - clase del botón de cerrar dentro del modal (sin .)
   */
  function setupModal(modalId, openBtnClass, closeInnerClass) {
    const modal = document.getElementById(modalId);
    const openBtns = document.querySelectorAll("." + openBtnClass);
    if (!modal || openBtns.length === 0) return;

    const closeBtn = modal.querySelector("." + closeInnerClass);
    if (!closeBtn) return;

    // Abrir
    openBtns.forEach((btn) => {
      btn.addEventListener("click", () => openModal(modal));
    });

    // Cerrar con la X
    closeBtn.addEventListener("click", () => closeModal(modal));

    // Cerrar clickeando fuera del contenido
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  }

  // ========= CONFIGURAR MODALES 1, 2 y 3 =========
  setupModal("modal-project1", "open-project1", "close1");
  setupModal("modal-project2", "open-project2", "close2");
  setupModal("modal-project3", "open-project3", "close3");

  // ========= CARRUSELES EN TODOS LOS MODALES =========
  function initAllCarousels() {
    const carousels = document.querySelectorAll(".modal .carousel");

    carousels.forEach((carousel) => {
      const track = carousel.querySelector(".carousel-track");
      const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
      const prevBtn = carousel.querySelector(".carousel-btn.prev");
      const nextBtn = carousel.querySelector(".carousel-btn.next");

      if (!track || slides.length === 0 || !prevBtn || !nextBtn) return;

      let index = 0;
      const slideCount = slides.length;

      function updateCarousel() {
        const slideWidth = carousel.clientWidth; // 🔹 ancho visible real
        const offset = index * slideWidth;
        track.style.transform = `translateX(-${offset}px)`;
      }

      nextBtn.addEventListener("click", () => {
        index = (index + 1) % slideCount;
        updateCarousel();
      });

      prevBtn.addEventListener("click", () => {
        index = (index - 1 + slideCount) % slideCount;
        updateCarousel();
      });

      // Recalcular al cambiar el tamaño de la ventana
      window.addEventListener("resize", updateCarousel);

      // Iniciar en la primera imagen
      updateCarousel();
    });
  }

  initAllCarousels();
});
document.addEventListener("DOMContentLoaded", function () {
  const btnDesc = document.getElementById("show-description-btn");
  const projectDesc = document.getElementById("project-description");

  if (!btnDesc || !projectDesc) return;

  btnDesc.addEventListener("click", () => {
    if (projectDesc.style.display === "none" || projectDesc.style.display === "") {
      projectDesc.style.display = "block";  // 🔹 MOSTRAR
      btnDesc.textContent = "Ocultar descripción del proyecto";
    } else {
      projectDesc.style.display = "none";   // 🔹 OCULTAR
      btnDesc.textContent = "Mostrar descripción del proyecto";
    }
  });
});
// PROJECT 2 – Description Button
document.addEventListener("DOMContentLoaded", function () {
  const btnDesc2 = document.getElementById("show-description-btn-2");
  const projectDesc2 = document.getElementById("project-description-2");

  if (!btnDesc2 || !projectDesc2) return;

  btnDesc2.addEventListener("click", () => {
    if (projectDesc2.style.display === "none" || projectDesc2.style.display === "") {
      projectDesc2.style.display = "block";
      btnDesc2.textContent = "Ocultar descripción del proyecto";
    } else {
      projectDesc2.style.display = "none";
      btnDesc2.textContent = "Mostrar descripción del proyecto";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const btnDesc3 = document.getElementById("show-description-btn-3");
  const projectDesc3 = document.getElementById("project-description-3");

  if (!btnDesc3 || !projectDesc3) return;

  btnDesc3.addEventListener("click", () => {
    if (projectDesc3.style.display === "none" || projectDesc3.style.display === "") {
      projectDesc3.style.display = "block";  // mostrar
      btnDesc3.textContent = "Ocultar descripción del proyecto";
    } else {
      projectDesc3.style.display = "none";   // ocultar
      btnDesc3.textContent = "Mostrar descripción del proyecto";
    }
  });
});
