var nome = document.querySelector("#nome");
var senha = document.querySelector(" #senha");

function login() {
    let encontrei = false;

    fetch("http://localhost:3000/")
    .then(res => { return res.json(); })
    .then(usuarios => {
        usuarios.forEach(usuario => {
            if((nome.value == usuario.nome) && (senha.value == usuario.username)) {
                encontrei = true;
                
                let infoUser = {
                    "id":usuario.id,
                    "nome":usuario.name
                };

                window.localStorage.setItem("infoUser", JSON.stringify(infoUser));

                window.location.href = "../mainComum/Comummain.js";
            }
        });
        if(encontrei == false) alert("Usuario ou Senha Invalidos");
    })
}