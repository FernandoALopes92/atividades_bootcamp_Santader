var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

var subtrair = document.getElementById("subtrair");
var adicionar = document.getElementById("adicionar");

subtrair.addEventListener("click",decrement,true)
adicionar.addEventListener("click",increment,true)

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


