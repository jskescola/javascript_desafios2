function AssignInput(input){
    if(input.type == "number"){
        if(isNaN(parseInt(input.value))) input.value = 0;
        return parseInt(input.value);
    }
    return input.value;
}

function Hide(element) { 
    if(element.classList.contains("window")){
        element.style.transform = "translateY(-80%)"
        element.style.opacity = "0%";
    }
    window.setTimeout(() => element.style.display = "none", 500);
}

function Show(element){
    if(element.classList.contains("window") || element.classList.contains("fieldset-rent") || element.classList.contains("form-rent")){
        element.style.display = "flex";
    } else {
        element.style.display = "initial";
    }

    window.setTimeout(() => element.style.opacity = "100%" , 0);
}

function HideFading(element) {
    element.style.transition = "1s opacity";
    element.style.opacity = "0%";
}

function ShowFading(element) {
    element.style.transition = "1s opacity";
    element.style.opacity = "100%";
}

function ProcessWindows(){
    const windowsArr = Array.from(windowsDivs);

    windowsArr.forEach((e, index) => {
        windowsDivs[index].style.position = "relative";
        windowsDivs[index].style.zIndex = `${index}`;
    });
}