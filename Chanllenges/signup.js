const rentForm = document.getElementById("rentForm");
const signupRes = document.getElementById("signupRes");
const nameInput = document.getElementById("nameInput");
const rgInput = document.getElementById("rgInput");
const cpfInput = document.getElementById("cpfInput");
const motherInput = document.getElementById("motherInput");
const dadInput = document.getElementById("dadInput");
const emailInput = document.getElementById("emailInput");
const cnhInput = document.getElementById("cnhInput");

const confirmCell = document.getElementsByClassName("confirmCell");

function Send() {
    const name = AssignInput(nameInput);
    const rg = AssignInput(rgInput);
    const cpf = AssignInput(cpfInput);
    const mother = AssignInput(motherInput);
    const dad = AssignInput(dadInput);
    const email = AssignInput(emailInput);

    if(cnhInput.checked == false) {
        alert("Você precisa ter uma carteira de motorista para alugar um carro!")
        return;
    }

    confirmCell[0].textContent = name;
    confirmCell[1].textContent = rg;
    confirmCell[2].textContent = cpf;
    confirmCell[3].textContent = mother;
    confirmCell[4].textContent = dad;
    confirmCell[5].textContent = email;

    Show(signupRes);
}

function Confirm() {
    alert("Cadastro enviado, verifique seu email!");
    location.reload();
}