var firstNumber = parseFloat(prompt("First number: "))
var operation = prompt("Choose one of these operations: + - * /")
var secondNumber = parseFloat(prompt("Second Number: "))

var result;

if (operation == "+"){
    result =  firstNumber + secondNumber
}
else if (operation == "-"){
    result =  firstNumber - secondNumber
}
else if (operation == "*"){
    result =  firstNumber * secondNumber
}
else if (operation == "/"){
    result =  firstNumber / secondNumber
}
if (result==isNaN || result == undefined){
    alert("Invalid Operation. Refresh to try again")
}
else{
    alert(firstNumber + operation + secondNumber + " = " + result)
}
