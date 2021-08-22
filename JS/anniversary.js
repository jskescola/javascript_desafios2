const birthForm = document.getElementById("birthform");
const birthInput = document.getElementById("birthinput");
const birthMsg = document.getElementById("birthmsg");

function ShowDate() {
    const rawDate = birthInput.value;
    if(rawDate == '') return;
    const formatDate = rawDate.replace(/-/g,  "/").split("/").reverse().join("/");
    const msgStr = `${userName}, você faz aniversário no dia ${formatDate}!`;

    birthMsg.innerHTML = msgStr;
    Show(birthMsg);
    Hide(birthForm);
    Hide(windowsDivs[1]);
    Show(windowsDivs[3]);
    
}