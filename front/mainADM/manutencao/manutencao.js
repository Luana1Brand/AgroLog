const url = "http://localhost:4000/Manutencao"
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
            //console.log(resp)
            lista = resp;
            prencherTabela();
        })
        .catch(err => console.error(err));
}

// "id": 1,
// "data": "2023-02-03T03:00:00.000Z",
// "valor": 1000,
// "descricao": "troca do parachoque",
// "id_carro": 



const prencherTabela = () => {
    lista.forEach((e, i) => {
        let linha = document.createElement("tr");
        let col1 = document.createElement("td");
        let col2 = document.createElement("td");
        let col3 = document.createElement("td");
        let col4 = document.createElement("td");
        let col5 = document.createElement("td");
        let col6 = document.createElement("td");
        let col7 = document.createElement("td");

        col1.innerHTML = e.id;
        col2.innerHTML = e.data;
        col3.innerHTML = e.valor;
        col4.innerHTML = e.descricao;
        col5.innerHTML = e.id_carro;
        col6.innerHTML = `<button> * </button>`
        col7.innerHTML = `<button onClick="remover('${e.id}')"> X </button>`

        linha.appendChild(col1);
        linha.appendChild(col2);
        linha.appendChild(col3);
        linha.appendChild(col4);
        linha.appendChild(col5);
        linha.appendChild(col6);
        linha.appendChild(col7);
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



const criar = document.querySelector("#criarManutencao")
criar.addEventListener("submit", () => {

    const body = {
        data: criar.data.value,

        valor: parseFloat(criar.valor.value),

        descricao: criar.descricao.value,

        id_carro: (criar.id_carro.value)
    }


    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    alert(JSON.stringify(options))


    fetch(url + '/create', options)
        .then(response => response.json())
        .then(() => window.location.reload())
        .catch(err => console.error(err));

})
