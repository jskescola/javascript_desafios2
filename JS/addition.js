const sumNum1 = document.getElementById("sumNum1");
const sumNum2 = document.getElementById("sumNum2");
const sumRes = document.getElementById("sumRes");
const sumResLabel = document.getElementById("sumResLabel");
const sumForm = document.getElementById("sumForm");

function Add() {
    const num1 = AssignInput(sumNum1);
    const num2 = AssignInput(sumNum2);

    const res = num1 + num2;

    sumRes.value = res;
    sumResLabel.innerHTML = `O resultado da soma entre ${num1} e ${num2} é:`;
    Hide(sumForm);
    Show(sumRes);
    Show(sumResLabel);
    Hide(windowsDivs[2]);
    Show(windowsDivs[4]);
}