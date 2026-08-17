function add(firstOperand, secondOperand) {
    return roundNumber((Number(firstOperand) + Number(secondOperand)).toString());
}

function subtract(firstOperand, secondOperand) {
    return roundNumber((firstOperand - secondOperand).toString());
}

function multiply(firstOperand, secondOperand) {
    return roundNumber((firstOperand * secondOperand).toString());
}

function divide(frstOperand, scndOperand) {
    if(secondOperand === '0') {
        resetDisplay = true;
        return "Can't divide by zero";
    }
    return roundNumber((frstOperand / scndOperand).toString());
}

function roundNumber(number) {
    if(!number.includes(".")) {
        return number;
    } 
    let numberAsArr = number.split(".");
    let numberInt = numberAsArr.at(0);
    let numberDecimal = numberAsArr.at(1);

    return numberDecimal.length > 5 ? numberInt + "." + numberDecimal.substring(0, 5) : numberInt + "." + numberDecimal;
}

let firstOperand;

let secondOperand;

let operator;

let resetDisplay = false;

function operate(firstOperand, operator, secondOperand) {
    switch(operator) {
        case "+":
            return add(firstOperand, secondOperand);
            break;
        case "−":
            return subtract(firstOperand, secondOperand);
            break;
        case "×":
            return multiply(firstOperand, secondOperand);
            break;
        case "÷":
            return divide(firstOperand, secondOperand);
            break;
    }
}

const dotButton = document.querySelector("#dot");

dotButton.addEventListener("click", () => {
    if(displayText.textContent === '') {
        return;
    } else if(displayText.textContent.includes(".")) {
        return;
    } else {
        displayText.textContent += ".";
        resetDisplay = false;
    }
})

const delButton = document.querySelector("#delete");

delButton.addEventListener("click", () => {
    let str = displayText.textContent;
    let str2 = str.substring(0, str.length - 1);
    displayText.textContent = str2;

    if(resetDisplay) {
        firstOperand = str2;
        resetDisplay = false;
    }
})

const digitButtons = document.querySelectorAll(".digit");
const displayText = document.querySelector("#display-text")

digitButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if(resetDisplay) {
            displayText.textContent = btn.textContent;
            resetDisplay = false;
        } else {
            displayText.textContent += btn.textContent;
        }
        if(operator === "=") {
            firstOperand = undefined;
            operator = undefined;
        }
    })
})

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if(firstOperand === undefined) {
            if(btn.textContent === "=" || displayText.textContent === '' || displayText.textContent === "Can't divide by zero") {
                return;
            } else {
                firstOperand = displayText.textContent;
                operator = btn.textContent;
                resetDisplay = true;
            }
        } else if(firstOperand !== undefined && secondOperand === undefined) {
            if(resetDisplay === true) {
                operator = btn.textContent;
            } else {
                secondOperand = displayText.textContent;
                let result = operate(firstOperand, operator, secondOperand);
                displayText.textContent = result;
                if(result === "Can't divide by zero") {
                    firstOperand = undefined;
                    secondOperand = undefined;
                    operator = undefined;
                    return;
                }
                firstOperand = result;
                operator = btn.textContent;
                secondOperand = undefined;
                resetDisplay = true;
            }
        }
    })
})

const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => clearDisplay());

function clearDisplay() {
    firstOperand = undefined;
    secondOperand = undefined;
    operator = undefined;
    resetDisplay = false;
    displayText.textContent = "";
} 
