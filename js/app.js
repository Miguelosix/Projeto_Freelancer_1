let btn = document.getElementById('btn');
let div = document.getElementById('resultado');
let nomeInput = document.getElementById('formexample0');
let emailInput = document.getElementById('formexemplo1');

let btnEntrar = document.getElementById('entrar')
let emailLogin = document.getElementById('email')
let senhaLogin = document.getElementById('senha')
let divLogin = document.getElementById('resultadoLogin');


function calcular() {
    let nome = nomeInput.value;
    let email = emailInput.value;

    div.innerHTML = "";

    if (nome == "" || email == "") {
        div.innerHTML += `
        <div class="alert alert-danger text-center" role="alert">
            Alguns campos não foram preenchidos. Tente novamente!
        </div>
        `;
    } else {
        let link = btn.querySelector('a');
        link.href = "../index.html";
    }
}

btn.addEventListener('click', calcular);

