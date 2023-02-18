
// display content of each keystroke
function displayContent(content){
    inputConsole.value += content
    // document.getElementById('inputConsole').value += content
}

function clearAll(){
    inputConsole.value = ""
    outputConsole.value = ""
}

function evaluateExpr(){
    outputConsole.value = eval(inputConsole.value)
}

function delLastItem(){
    inputConsole.value = inputConsole.value.slice(0,-1)
}