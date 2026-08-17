// function for add
function add(firstOperand, secondOperand) {
    return Number(firstOperand) + Number(secondOperand);
}

// function for subtract
function subtract(firstOperand, secondOperand) {
    return firstOperand - secondOperand;
}

// function for multiply
function multiply(firstOperand, secondOperand) {
    return firstOperand * secondOperand;
}

// function for divide
function divide(frstOperand, scndOperand) {
    if(secondOperand === '0') {
        console.log(typeof secondOperand);
        resetDisplay = true;
        return "Can't divide by zero";
    }
    return frstOperand / scndOperand;
}

// three variables, firstOperand, operator, secondOperand
let firstOperand;

let secondOperand;

let operator;

let resetDisplay = false;

// func operate takes operator and two operands and calls one of the above func with the operands
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

// func that adds eventListener to buttons that adds the value of the button pressed to the display-text div
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
            console.log("First operand is undefined");
            if(btn.textContent === "=") {
                console.log("button is equals button, return")
                return;
            }
            if(displayText.textContent === '') {
                console.log("Display text is empty");
                return;
            } else if(displayText.textContent === "Can't divide by zero") {
                return;
            } else {
                firstOperand = displayText.textContent;
                operator = btn.textContent;
                resetDisplay = true;
                console.log("Display text contains first operand: " + firstOperand);
                console.log("Current operator: " + btn.textContent);
                console.log("First operand is now set to: " + firstOperand);
            }
        } else if(firstOperand !== undefined && secondOperand === undefined) {
            if(resetDisplay === true) {
                operator = btn.textContent;
                console.log("Current operator: " + btn.textContent);
            } else {
                secondOperand = displayText.textContent;
                let result = operate(firstOperand, operator, secondOperand);
                displayText.textContent = result;
                if(result === "Can't divide by zero") {
                    firstOperand = undefined;
                    secondOperand = undefined;
                    operator = "undefined";
                    return;
                }
                firstOperand = result;
                console.log(firstOperand);
                operator = btn.textContent;
                console.log(operator);
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
