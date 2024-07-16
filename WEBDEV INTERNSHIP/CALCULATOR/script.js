let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let operand1 = null;

function clearDisplay() {
    currentInput = '';
    operator = null;
    operand1 = null;
    display.textContent = '0';
}

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput || '0';
}

function setOperator(newOperator) {
    if (currentInput === '') return;

    if (operand1 === null) {
        operand1 = parseFloat(currentInput);
    } else if (operator) {
        operand1 = operate(operand1, parseFloat(currentInput), operator);
        display.textContent = operand1;
    }
    
    operator = newOperator;
    currentInput = '';
}

function calculateResult() {
    if (operator && currentInput !== '') {
        let operand2 = parseFloat(currentInput);
        let result = operate(operand1, operand2, operator);
        display.textContent = result;
        currentInput = result.toString();
        operator = null;
        operand1 = null;
    }
}

function operate(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        default:
            return operand2;
    }
}
