function logoff() {
    localStorage.removeItem("corretor");

    window.location.href = "../../login/login.html";
}

function OnLoad() {
    console.log("oi")
}



// const user = document.querySelector("#user");


// user.innerHTML = body.user;

// console.log(user)




function abrirModal(nameModal) {
    let modals = ["operacoes", "carros", "manutencoes", "usuarios", "OperacoesCreate"];
    modals.forEach(modal => {
        document.querySelector(`.${modal}`).style.display = "none";
    })
    document.querySelector(`.${nameModal}`).style.display = "block";
    window.location.href = "#demo-modal";
}

function linkOperacoes() {

    window.location.href = "../operacoes/operacoes.html";
}

function linkCarros() {

    window.location.href = "../carros/carros.html";
}

function linkManutencao() {

    window.location.href = "../manutencao/manutencao.html";
}

function linkUsuario() {

    window.location.href = "../usuario/usuario.html";
}



function mostrartexto() {
    document.querySelector(".texto").classList.toggle("modelo");
}