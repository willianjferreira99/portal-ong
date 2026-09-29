/* ==========================
   MENU HAMBÚRGUER
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        
    const expanded =
        menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
        "aria-expanded",
        !expanded
);
    });
}

/* ==========================
   MODAL
========================== */

const abrirModal = document.getElementById("abrirModal");
const fecharModal = document.getElementById("fecharModal");
const modal = document.getElementById("modal");

if (abrirModal && modal) {

    abrirModal.addEventListener("click", () => {
        modal.style.display = "block";
    });

}

if (fecharModal && modal) {

    fecharModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

}

window.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.style.display = "none";
    }

});

/* ==========================
   TOAST
========================== */

function mostrarToast() {

    const toast = document.getElementById("toast");

    if (toast) {

        toast.style.display = "block";

        setTimeout(() => {
            toast.style.display = "none";
        }, 3000);

    }
}

/* ==========================
   FORMULÁRIO
========================== */

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        mostrarToast();

    });

}