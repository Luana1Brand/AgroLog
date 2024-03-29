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






function abrirModal() {
    document.querySelector(".modal").classList.toggle("modelo")
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


// new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(body.data))


const criar = document.querySelector("#criarManutencao")
criar.addEventListener("submit", () => {
    // window.event.preventDefault();
    const body = {
        data: new Date(criar.data.value),

        valor: parseFloat(criar.valor.value),

        descricao: criar.descricao.value,

        id_carro: Number((criar.id_carro.value))
    }
    console.log(criarManutencao)


    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    options.body = JSON.stringify(body)

    console.log(options);

    alert(JSON.stringify(options))


    fetch(url + '/create', options)
        .then(response => response.json())
        .then(() => window.location.href = "#")
        .catch(err => console.error(err));

})
