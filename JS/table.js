tableForm = document.getElementById("tableForm");
inputTable = document.getElementById("inputTable");
tableResDiv = document.getElementsByClassName("tableResDiv")[0];
tableResChilds = tableResDiv.children;

function CalcTable() {
    const num = AssignInput(inputTable);
    tableResChilds[0].innerHTML = `Tabuada do ${num}`

    for (let i = 0; i <= 10; i++) {
        const tableNum = num * i;
        const tableP = document.createElement("p");
        
        tableP.innerHTML = `${num} x ${i} = ${tableNum}`;

        tableResDiv.appendChild(tableP);
    }

    Hide(tableForm);
    Show(tableResDiv);
    Hide(windowsDivs[7]);
    Show(windowsDivs[9]);
}