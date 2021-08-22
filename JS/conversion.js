const convForm = document.getElementById("convForm");
const inputConv = document.getElementById("inputConv");
const convResDiv = document.getElementsByClassName("convResDiv")[0];
const convResP = document.getElementsByClassName("convResP");

function CalcConv() {
    const val = AssignInput(inputConv);
    
    const centRes = val * 100;
    const milRes = val * 1000;

    convResP[0].innerHTML = `${val} Metros equivalem à:`;
    convResP[1].innerHTML = `${centRes} Centímetros`;
    convResP[3].innerHTML = `${milRes} Milímetros`;

    Hide(convForm);
    Show(convResDiv);
    Hide(windowsDivs[6]);
    Show(windowsDivs[8]);
}


