document.addEventListener("DOMContentLoaded",function(){})//make a calculation btwn two numbers and see the result using four operations
//step 1- be able to press a button and see that number in the screen
//be able to press another number and see that in the screen
var number1 = null;
var number2 = null;
var operator = null;
  //add a click event listener so that when a button is clicked, its inner HTML (the number itself) goes into the screen
var  display = document.getElementById("screen");
var numberButtons = document.getElementByClassName("buttonNum");
for (var i=0;i<numberButtons.length;i++){
  numberButtons[i].addEventListener("click",function(){
    display.innerHTML = this.innerHTML;
  });
}
function displayNumber(){

  if (number1 != null){
    number1 = this.innerHTML;
  } else{
    number2 = this.innerHTML;
  }

}
  ////make 2 variables called number1 and number2

  //save the value of this number as a variable
//step 2- be able to press an operator button and see that operator on the screen
  //add a click event listener so that when you click an operator button, its inner HTML (the symbol of the operation) goes into the screen if the screen's inner html is not Sparta Calculator (if theres already a number or operator on the screen)
  //save the value of this operation in a variable
var operatorButton = document.getElementsByClassName("operatorButton");
for (var i=0;i<operatorButtons.length;i++){
  operatorButtons[i].addEventListener("click",displayOperator);
}
function displayOperator(){
  if display.innerHTML != "Sparta Calculator"){
    display.innerHTML = this.innerHTML;
  }
}
//step 3- be able to press another number button and see that number in the screen
//step 4- be able to press the equals number and see the result on the screen
var equalsButton = document.getElementsByClassName("equals")[0];
equalsButton.addEventListener("click",displayResult);
  //call the eval function with number1, number2 and operator passed in and put the result into the screen
function displayResult(){
  display.innerHTML = eval(number1+operator+number2);
}



// step 5- be able to clear the screen by pressing the AC button
  //add a click event listener so that the screen goes back to sparta global
  //also, the number1 and number2 variables are reset to null
var clearButton = document.getElementsByClassName("buttonClear")[0]
clearButton.addEventListener("click",clearScreen);
function clearScreen(){
  display.innerHTML = "Sparta Calculator";
  number1 = null;
  number2 = null;
  operator = null;
  debugger;
}
