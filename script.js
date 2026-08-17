// function for add
function add(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
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
function divide(firstOperand, secondOperand) {
    return firstOperand / secondOperand;
}

// three variables, firstOperand, operator, secondOperand
let firstOperand;

let secondOperand;

let operator;

// func operate takes operator and two operands and calls one of the above func with the operands
function operate(firstOperand, operator, secondOperand) {
    switch(operator) {
        case "+":
            return add(firstOperand, secondOperand);
            break;
        case "-":
            return subtract(firstOperand, secondOperand);
            break;
        case "*":
            return multiply(firstOperand, secondOperand);
            break;
        case "/":
            return divide(firstOperand, secondOperand);
            break;
    }
}
