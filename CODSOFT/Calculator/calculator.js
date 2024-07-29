const display = document.getElementById("display");
let history = []

function insertKey(input){
    display.value += input;
}

function clearInput(){
    display.value = "";
}

function solution(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function deleteKey(){
    display.value=display.value.toString().slice(0,-1);
}

