var result = "";
var processed = 0;

function delAll(){
    result = "";
    processed = 0;
    document.getElementById("disp").innerHTML = result;
}
function del(){
    result.pop;
    document.getElementById("disp").innerHTML = result;
}    
function percentage(){
    processed /= 100;
    document.getElementById("disp").innerHTML = result;
}    
function divide(){
    result += "/";
    document.getElementById("disp").innerHTML = result;
}    
function multiply(){
    result += "*";
    document.getElementById("disp").innerHTML = result;
}    
function subtract(){
    result += "-";
    document.getElementById("disp").innerHTML = result;
}   
function add(){
    result += "+";
    document.getElementById("disp").innerHTML = result;
}    
function equal(){
    result = processed;
    document.getElementById("disp").innerHTML = processed;
}    
function zero(){
    result += "0";
    document.getElementById("disp").innerHTML = result;
}
function one(){
    result += "1";
    document.getElementById("disp").innerHTML = result;
}    
function two(){
    result += "2";
    document.getElementById("disp").innerHTML = result;
}    
function three(){
    result += "3";
    document.getElementById("disp").innerHTML = result;
}    
function four(){
    result += "4";
    document.getElementById("disp").innerHTML = result;
}    
function five(){
    result += "5";
    document.getElementById("disp").innerHTML = result;
}    
function six(){
    result += "6";
    document.getElementById("disp").innerHTML = result;
}    
function seven(){
    result += "7";
    document.getElementById("disp").innerHTML = result;
}    
function eight(){
    result += "8";
    document.getElementById("disp").innerHTML = result;
}    
function nine(){
    result += "9";
    document.getElementById("disp").innerHTML = result;
}    
function float(){
    result += ".";
    document.getElementById("disp").innerHTML = result;
}    

/* convertir la chaine de caractère en nombre */
/* effectuer le calcul quand on clique sur egal */
/* montrer le résultat dans disp */



console.log(result);