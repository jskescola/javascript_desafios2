const labelRoot = document.getElementById("labelRoot");
const inputRoot = document.getElementById("inputRoot");
const buttonRoot = document.getElementById("buttonRoot");
const rootResDiv = document.getElementsByClassName("rootResDiv");
const rootResP = document.getElementsByClassName("rootResP");
const rootResInput = document.getElementsByClassName("rootResInput");

function CalcRoot() {
    let num = AssignInput(inputRoot);

    const doubleRes = num * 2;
    const tripleRes = num * 3;
    const rootRes = Math.sqrt(num);

    rootResP[0].innerHTML = `O dobro de ${num} é:`;
    rootResInput[0].value = doubleRes;
    rootResP[1].innerHTML = `O triplo de ${num} é:`;
    rootResInput[1].value = tripleRes;
    rootResP[2].innerHTML = `A raiz quadrada de ${num} é:`;
    rootResInput[2].value = rootRes;

    Show(rootResDiv[0]);
    Hide(labelRoot);
    Hide(inputRoot);
    Hide(buttonRoot);
    Hide(windowsDivs[4]);
    Show(windowsDivs[6]);
}

