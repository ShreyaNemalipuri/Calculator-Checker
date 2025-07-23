let firstElement = document.getElementById("firstNumber");
let secondElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let result = document.getElementById("gameResult");

function restart() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    firstElement.textContent = Math.ceil(firstRandomNumber);
    secondElement.textContent = Math.ceil(secondRandomNumber);
    result.textContent = "";
    userInputElement.value = "";
}
restart();

function check() {
    let firstRandomInteger = parseInt(firstElement.textContent);
    let secondRandomInteger = parseInt(secondElement.textContent);
    let uservalue = parseInt(userInputElement.value);
    if ((firstRandomInteger + secondRandomInteger)===uservalue) {
        result.textContent = "Congratulations! You got it right.";
        result.style.backgroundColor = "#028a0f";
    } else {
        result.textContent = "Please Try again.";
        result.style.backgroundColor = "#1e217c";
    }
}
