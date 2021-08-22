const welcomeMsg = document.getElementById("welcomemsg");
const nameInput = document.getElementById("nameinput");
const nameLabel = document.getElementById("nameinputlabel");
let userName;

nameInput.addEventListener("keyup", e => {
    if(e.code == "Enter") Showmsg();
})

function Showmsg() {
    userName = nameInput.value;
    const msg = `Olá ${userName}, seja bem-vindo!`

    if(userName == '') return;

    welcomeMsg.innerHTML = msg;
    Show(welcomeMsg);
    Hide(nameInput);
    Hide(nameLabel);
    Hide(windowsDivs[0]);
    Show(windowsDivs[2]);
}