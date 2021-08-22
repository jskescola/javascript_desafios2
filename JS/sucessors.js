const sucNum1 = document.getElementById("sucNum1");
const sucNum2 = document.getElementById("sucNum2");
const sucRes = document.getElementById("sucRes");
const sucResLabel = document.getElementById("sucResLabel");
const sucForm = document.getElementById("sucForm");
const sucP = document.getElementById("sucP");
const antP = document.getElementById("antP");

function CalcSuc() {
    const num1 = AssignInput(sucNum1);
    const num2 = AssignInput(sucNum2);

    const res = num1 + num2;
    const suc = res + 1;
    const ant = res - 1;

    sucRes.value = res;
    sucResLabel.innerHTML = `O resultado da soma entre ${num1} e ${num2} é:`;
    sucP.innerHTML = `O sucessor de ${res} é: ${suc}`;
    antP.innerHTML = `O antecessor de ${res} é: ${ant}`;
    Hide(sucForm);
    Show(sucRes);
    Show(sucResLabel);
    Show(sucP);
    Show(antP);
    Hide(windowsDivs[3]);
    Show(windowsDivs[5]);
}