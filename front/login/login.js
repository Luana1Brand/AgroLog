const url = "http://localhost:4000/Funcionario";
const cpf = document.querySelector("#cpf");
const senha = document.querySelector("#senha");


function login() {
    let body = {
        "cpf": cpf.value,
        "senha": senha.value
    }

    let options = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
    }

    fetch(url + "/login", options)
        .then(resp => { return resp.json() })
        .then(info => {
            if (info.length > 0) {
                if (info[0].cpf != undefined) {



                    window.localStorage.setItem("user", JSON.stringify(info[0]));

                    if (info[0].cargo === "ADM" || info[0].cargo === "Motorista chefe") {

                        window.location.href = "../mainADM/pgPrincipal/ADMmain.html";


                    } else {

                        window.location.href = "../mainComum/home/comumMain.html";


                    }




                } else {

                    alert("USER NÃO ENCONTRADO");


                }
            } else {
                alert("USER NÃO ENCONTRADO");

            }

        });

}


// login ADM
// 304.338.280-30
// Weelington123


//motorisa chefe
// 795.595.428-93
// Raul123


// login Operacional
// 856.788.968-57
// Guilherme123