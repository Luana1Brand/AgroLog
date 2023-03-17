const url = "http://localhost:4000/Frota"
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
    document.querySelector(".modal").classList.toggle("modelo")
    // let modals = ["criar"];
    // modals.forEach(modal => {
    //     document.querySelector(`.${modal}`).style.display = "none";
    // })
    // document.querySelector(`.${nameModal}`).style.display = "flex";
    // window.location.href = "#demo-modal";
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
        let col8 = document.createElement("td");

        col1.innerHTML = e.id;
        col2.innerHTML = e.marca_carro;
        col3.innerHTML = e.placa_carro;
        col4.innerHTML = e.funcao;
        col5.innerHTML = e.ano;
        col6.innerHTML = e.gastos_totais;
        col7.innerHTML = `<button> * </button>`
        col8.innerHTML = `<button onClick="remover('${e.id}')"> X </button>`

        linha.appendChild(col1);
        linha.appendChild(col2);
        linha.appendChild(col3);
        linha.appendChild(col4);
        linha.appendChild(col5);
        linha.appendChild(col6);
        linha.appendChild(col7);
        linha.appendChild(col8);
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






const criar = document.querySelector("#criarCarro")
criar.addEventListener("submit", () => {

    const body = {
        marca_carro: criar.marca.value,
        placa_carro: criar.placa.value,
        funcao: criar.funcao.value,
        ano: parseInt(criar.ano.value),
        gastos_totais: parseFloat(criar.gastos.value)
    }


    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    alert(JSON.stringify(options))


    fetch(url + '/create', options)
        .then(response => response.json())
        .then(() => window.location.href = "#")
        .catch(err => console.error(err));

})
