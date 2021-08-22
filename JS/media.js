const inputMedia1 = document.getElementById("inputMedia1");
const inputMedia2 = document.getElementById("inputMedia2");
const mediaResLabel = document.getElementById("mediaResLabel");
const mediaResInput = document.getElementById("mediaResInput");
const formDiv = document.getElementById("formDiv");

function CalcMedia() {
    const grade1 = AssignInput(inputMedia1);
    const grade2 = AssignInput(inputMedia2);

    const res = (grade1 + grade2) / 2;

    mediaResInput.value = res;

    Hide(formDiv);
    Show(mediaResLabel);
    Show(mediaResInput);
    Hide(windowsDivs[5]);
    Show(windowsDivs[7]);
}