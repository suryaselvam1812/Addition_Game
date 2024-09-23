let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let result = document.getElementById("gameResult");


function checkResult() {
    let number1 = parseInt(firstNumber.textContent);
    let number2 = parseInt(secondNumber.textContent);

    let user = parseInt(userInput.value);
    let sumvalue = number1 + number2;
    if (sumvalue === user) {
        result.textContent = "Congratulations! You got it right.";
        document.getElementById("gameResult").style.backgroundColor = "#028a0f"
    } else {
        result.textContent = "Please Try Again!"
        document.getElementById("gameResult").style.backgroundColor = "#1e217c"

    }

}

function restartGame() {
    let first = Math.random() * 100 + 1;
    let second = Math.random() * 100 + 1;
    firstNumber.textContent = Math.ceil(first);
    secondNumber.textContent = Math.ceil(second);
    userInput.value = "";
    result.textContent = "";
}
restartGame();