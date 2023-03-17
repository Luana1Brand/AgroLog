
const url = "http://localhost:4000/Funcionario"
const corpo = document.querySelector("#corpo")
var lista = [];



function logoff() {
    localStorage.removeItem("corretor");

    window.location.href = "../../login/login.html";
}


function voltar() {

    window.location.href = "../pgPrincipal/ADMmain.html";
}



function abrirModal(nameModal) {
    let modals = ["criar"];
    modals.forEach(modal => {
        document.querySelector(`.${modal}`).style.display = "none";
    })
    document.querySelector(`.${nameModal}`).style.display = "block";
    window.location.href = "#demo-modal";
}




const onLoad = () => {
    const options = { method: 'GET' };

    fetch(url + '/read', options)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            lista = resp;
            prencherTabela();
        })
        .catch(err => console.error(err));
}



const prencherTabela = () => {
    lista.forEach((e, i) => {
        let linha = document.createElement("tr");
        let col1 = document.createElement("td");
        let col2 = document.createElement("td");
        let col3 = document.createElement("td");
        let col4 = document.createElement("td");
        let col5 = document.createElement("td");
        let col6 = document.createElement("td");

        col1.innerHTML = e.id;
        col2.innerHTML = e.nome;
        col3.innerHTML = e.cargo;
        col4.innerHTML = e.cpf;
        col5.innerHTML = `<button> * </button>`
        col6.innerHTML = `<button onClick="remover('${e.id}')"> X </button>`





        linha.appendChild(col1);
        linha.appendChild(col2);
        linha.appendChild(col3);
        linha.appendChild(col4);
        linha.appendChild(col5);
        linha.appendChild(col6);
        corpo.appendChild(linha);
    });
}




const remover = (id) => {
    const options = { method: 'DELETE' };

    fetch(url + '/delete/' + id, options)
        .then(response => response.json())
        .then(() => window.location.reload())
        .catch(err => console.error(err));
}
