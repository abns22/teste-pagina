const texto = document.querySelectorAll(".texto")
const botao = document.querySelectorAll(".mais")

botao.forEach((botao, index) => {
    botao.addEventListener("click", () => {
    texto[index].classList.toggle("reveal")
    });
});

