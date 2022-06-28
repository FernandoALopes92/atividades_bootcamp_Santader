var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    console.log(currentNumber);

    if(currentNumber == 10){
       document.getElementById("adicionar").disabled=true;
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber == 0){
        document.getElementById("subtrair").disabled=true;
    }    
}


