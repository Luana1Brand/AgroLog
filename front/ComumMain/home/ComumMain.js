function logoff() {
    localStorage.removeItem("corretor");

    window.location.href = "../login/login.html";
}


function OnLoad() {
    console.log("oi")
}


function linkCriar() {
    window.location.href = "../registrar/registrar.html";
}


function linkOperacoes() {
    window.location.href = "../suasOperacoes/suasOperacoes.html";
}

function linkCarros() {
    window.location.href = "../carros/carros.html";
}

function linkCreateManutencao() {
    window.location.href = "../createManutencao/createManutencao.html";
}

function linkListarManutencao() {
    window.location.href = "../listarManutencao/listarManutencao.html";
}


