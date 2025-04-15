const texto = document.querySelectorAll(".texto");
const botao = document.querySelectorAll(".mais");
const darkmode = document.querySelector(".escuro");

const imagemBdo = document.querySelectorAll("#bdo-container .imgs")[0];
const imagemRive = document.querySelectorAll("#rive-container .imgs")[0];
const imagemZed = document.querySelectorAll("#zed-container .imgs")[0];

const changezed = document.querySelector(".bt-imgzed");
const changebdo = document.querySelector(".bt-imgbdo");
const changerive = document.querySelector(".bt-imgrive");

changebdo.addEventListener('click', () => {
    if (imagemBdo.src.includes("bdo.jpg")) {
        imagemBdo.src = "bdo1.jpg";
    } else if (imagemBdo.src.includes("bdo1.jpg")) {
        imagemBdo.src = "bdo2.jpg";
    } else {
        imagemBdo.src = "bdo.jpg";
    }
});

changerive.addEventListener('click', () => {
    if (imagemRive.src.includes("rive.png")) {
        imagemRive.src = "rive1.jpg";
    } else if (imagemRive.src.includes("rive1.jpg")) {
        imagemRive.src = "rive2.jpg";
    } else {
        imagemRive.src = "rive.png";
    }
});

changezed.addEventListener('click', () => {
    if (imagemZed.src.includes("zed.jpg")) {
        imagemZed.src = "zed2.jpg";
    } else if (imagemZed.src.includes("zed2.jpg")) {
        imagemZed.src = "zed3.jpg";
    } else {
        imagemZed.src = "zed.jpg";
    }
});

let isdarkmode = false

darkmode.addEventListener('click', () => {
    function changeTheme() {
        document.body.classList.toggle("dark-mode");
      }
      changeTheme();

        if (darkmode.innerText == "Modo escuro") {
            darkmode.innerText = "Modo claro"
        } else {
            darkmode.innerText = "Modo escuro";
        }
}) 

botao.forEach((botao, index) => {
    botao.addEventListener("click", () => {
    texto[index].classList.toggle("reveal");

        if (botao.innerText == "Ler mais ⬇️") {
            botao.innerText = "Ler menos ⬆️"
        } else {
            botao.innerText = "Ler mais ⬇️";
        }

    });
});